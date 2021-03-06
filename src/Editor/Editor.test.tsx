import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Editor from "Editor";
import RootStore from "store/RootStore";
import { RootProvider } from "store";

describe("Editor", () => {
    const setupTest = () => {
        const rootStore = new RootStore();

        render(
            <RootProvider value={rootStore}>
                <Editor />
            </RootProvider>
        );
        const input = screen.getByLabelText(/제목/);
        const textarea = screen.getByLabelText(/내용/);
        const submit = screen.getByText(/저장/);
        return { input, textarea, submit };
    };

    test("should change title input", () => {
        const { input } = setupTest();

        userEvent.type(input, "asdf");
        expect(input).toHaveValue("asdf");
    });

    test("should change content textarea", () => {
        const { textarea } = setupTest();

        userEvent.type(textarea, "content test");
        expect(textarea).toHaveValue("content test");
    });

    test("should save in localstorage", () => {
        const { input, textarea, submit } = setupTest();

        jest.spyOn(window.localStorage.__proto__, "setItem");
        window.localStorage.__proto__.setItem = jest.fn();
        window.alert = jest.fn();

        userEvent.type(input, "TEST 1");
        userEvent.type(textarea, "Content1");
        userEvent.click(submit);

        expect(localStorage.setItem).toHaveBeenCalled();
    });
});

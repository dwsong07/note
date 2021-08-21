import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { RootProvider } from "store";
import RootStore from "store/RootStore";
import storageMock from "utils/storageMock";
import userEvent from "@testing-library/user-event";

describe("Note", () => {
    beforeAll(() => {
        storageMock();
    });

    test("render note", () => {
        const rootStore = new RootStore();

        render(
            <RootProvider value={rootStore}>
                <App />
            </RootProvider>
        );

        userEvent.click(screen.getByText("Hello"));

        expect(screen.getByText(/World/)).toBeInTheDocument();
    });
});

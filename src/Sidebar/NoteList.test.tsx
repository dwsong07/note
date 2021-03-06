import React from "react";
import { render, screen } from "@testing-library/react";
import { RootProvider } from "store";
import NoteList from "Sidebar/NoteList";
import RootStore from "store/RootStore";
import storageMock from "utils/storageMock";
import { MemoryRouter } from "react-router-dom";

describe("NoteList", () => {
    beforeAll(() => {
        storageMock();
    });

    test("should render notelist", () => {
        const rootStore = new RootStore();

        render(
            <RootProvider value={rootStore}>
                <NoteList />
            </RootProvider>,
            { wrapper: MemoryRouter }
        );

        screen.getAllByText(/Hello/);
    });
});

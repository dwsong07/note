import React from "react";
import { render, screen } from "@testing-library/react";
import { RootProvider } from "store";
import NoteList from "Sidebar/NoteList";
import RootStore from "store/RootStore";
import storageMock from "utils/storageMock";

describe("NoteList", () => {
    beforeAll(() => {
        storageMock();
    });

    test("should render notelist", () => {
        const rootStore = new RootStore();

        render(
            <RootProvider value={rootStore}>
                <NoteList />
            </RootProvider>
        );

        screen.getAllByText(/Hello/);
    });
});

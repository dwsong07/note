import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Sidebar from "Sidebar";
import storageMock from "utils/storageMock";
import { RootProvider } from "store";
import RootStore from "store/RootStore";

describe("Sidebar", () => {
    beforeAll(() => {
        storageMock();
    });

    test("should filter note list by search", () => {
        const rootStore = new RootStore();

        render(
            <RootProvider value={rootStore}>
                <Sidebar />
            </RootProvider>
        );

        userEvent.type(screen.getByPlaceholderText(/검색/), "Hello");
        expect(screen.getAllByText(/Hello/)).toHaveLength(2);
    });
});

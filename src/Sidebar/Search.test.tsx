import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "Sidebar/Search";
import { RootProvider } from "store";
import RootStore from "store/RootStore";

describe("Search", () => {
    test("Does search change correctly", () => {
        const rootStore = new RootStore();

        render(
            <RootProvider value={rootStore}>
                <Search />
            </RootProvider>
        );
        const search = screen.getByPlaceholderText(/검색/);

        userEvent.type(search, "Search test");
        expect(search).toHaveValue("Search test");
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "Sidebar/Search";

describe("Search", () => {
    test("Does search change correctly", () => {
        render(<Search />);
        const search = screen.getByPlaceholderText(/검색/);

        userEvent.type(search, "Search test");
        expect(search).toHaveValue("Search test");
    });
});

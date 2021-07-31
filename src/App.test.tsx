import React from "react";
import { render, screen } from "@testing-library/react";

import App from "App";
import storageMock from "utils/storageMock";
import RootStore from "store/RootStore";
import { RootProvider } from "store";

describe("App", () => {
    beforeAll(() => {
        storageMock();

        const rootStore = new RootStore();
        render(
            <RootProvider value={rootStore}>
                <App />
            </RootProvider>
        );
    });

    test("should render sidebar and editor", () => {
        screen.getByText(/제목/);
        screen.getByText(/Hello world/);
    });
});

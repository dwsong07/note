import Note from "./Note";
import RootStore from "./RootStore";

describe("Mobx Store", () => {
    beforeAll(() => {
        interface storeType {
            [key: string]: string;
        }

        const store: storeType = {
            "0": '{"title": "Hello", "content": "World"}',
            "1": '{"title": "Shut", "content": "Up"}',
        };

        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: (key: string) => store[key],
                length: 2,
            },
        });
    });

    test("Are notes correctly pushed", () => {
        const rootStore = new RootStore();

        expect(rootStore.noteStore.notes).toEqual([
            new Note("Hello", "World"),
            new Note("Shut", "Up"),
        ]);
    });

    test("Does search change", () => {
        const { uiState } = new RootStore();

        uiState.setSearch("asdf");
        expect(uiState.search).toBe("asdf");
    });
});

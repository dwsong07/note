import storageMock from "utils/storageMock";
import Note from "./Note";
import RootStore from "./RootStore";

describe("Mobx Store", () => {
    beforeAll(() => {
        storageMock();
    });

    test("should notes correctly pushed", () => {
        const rootStore = new RootStore();

        expect(rootStore.noteStore.notes).toEqual([
            new Note(0, "Hello", "World"),
            new Note(1, "Shut", "Up"),
            new Note(2, "Hello world", "bruh"),
        ]);
    });

    test("should search change", () => {
        const { uiState } = new RootStore();

        uiState.setSearch("asdf");
        expect(uiState.search).toBe("asdf");
    });

    test("should filter notes by search", () => {
        const { noteStore, uiState } = new RootStore();
        uiState.setSearch("Hello");
        expect(noteStore.filteredNotes).toEqual([
            new Note(0, "Hello", "World"),
            new Note(2, "Hello world", "bruh"),
        ]);
    });
});

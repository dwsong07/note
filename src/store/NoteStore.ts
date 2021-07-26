import { makeAutoObservable } from "mobx";
import Note from "./Note";
import RootStore from "./RootStore";

class NoteStore {
    notes: Note[] = [];
    root;

    constructor(root: RootStore) {
        makeAutoObservable(this);

        for (let i = 0; i < localStorage.length; i++) {
            const { title, content } = JSON.parse(
                localStorage.getItem(i.toString()) as string
            );
            this.notes.push(new Note(i, title, content));
        }

        this.root = root;
    }

    get filteredNotes() {
        const search = this.root.uiState.search;

        return this.notes.filter((note) => new RegExp(search).test(note.title));
    }
}

export default NoteStore;

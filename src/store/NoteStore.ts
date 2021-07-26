import { makeAutoObservable } from "mobx";
import Note from "./Note";

class NoteStore {
    notes: Note[] = [];

    constructor() {
        makeAutoObservable(this);

        for (let i = 0; i < localStorage.length; i++) {
            const { title, content } = JSON.parse(
                localStorage.getItem(i.toString()) as string
            );
            this.notes.push(new Note(title, content));
        }
    }
}

export default NoteStore;

import { makeAutoObservable } from "mobx";

class Note {
    id: number;
    title: string;
    content: string;

    constructor(id: number, title: string, content: string) {
        makeAutoObservable(this);

        this.id = id;
        this.title = title;
        this.content = content;
    }
}

export default Note;

import { makeAutoObservable } from "mobx";

class Note {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        makeAutoObservable(this);

        this.title = title;
        this.content = content;
    }
}

export default Note;

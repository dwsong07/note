import React from "react";
import { useStore } from "store";
import NoteItem from "./NoteItem";

function NoteList() {
    const { noteStore } = useStore();

    const { filteredNotes } = noteStore;

    return (
        <>
            {filteredNotes.map(({ id, title }) => (
                <NoteItem key={id} title={title} />
            ))}
        </>
    );
}

export default NoteList;

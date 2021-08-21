import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useStore } from "store";

interface MatchParams {
    id: string;
}

function Note({ match }: RouteComponentProps<MatchParams>) {
    const { id } = match.params;
    const { noteStore } = useStore();

    const note = noteStore.notes.find((note) => note.id === Number(id));

    if (!note) {
        return <div>NOT FOUND</div>;
    }

    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
    );
}

export default Note;

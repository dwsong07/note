import React from "react";

interface NoteItemProps {
    title: string;
}

function NoteItem({ title }: NoteItemProps) {
    return <div>{title}</div>;
}

export default NoteItem;

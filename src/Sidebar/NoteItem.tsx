import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoteItem.module.css";

interface NoteItemProps {
    title: string;
    id: number;
}

function NoteItem({ title, id }: NoteItemProps) {
    return (
        <div className={styles.NoteItem}>
            <Link to={`/note/${id}`}>{title}</Link>
        </div>
    );
}

export default NoteItem;

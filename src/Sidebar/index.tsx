import React from "react";
import Search from "Sidebar/Search";
import NoteList from "./NoteList";

import styles from "Sidebar/index.module.css";

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <Search />
            <NoteList />
        </div>
    );
}

export default Sidebar;

import React from "react";
import Search from "Sidebar/Search";

import styles from "Sidebar/index.module.css";

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <Search />
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </div>
    );
}

export default Sidebar;

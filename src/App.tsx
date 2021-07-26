import React from "react";
import Sidebar from "./Sidebar";

import styles from "App.module.css";
import Editor from "Editor";

function App() {
    return (
        <div>
            <Sidebar />
            <div className={styles.content}>
                <Editor />
            </div>
        </div>
    );
}

export default App;

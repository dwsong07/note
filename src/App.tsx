import React from "react";
import Sidebar from "./Sidebar";
import Editor from "Editor";

import styles from "App.module.css";

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

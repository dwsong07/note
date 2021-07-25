import React from "react";
import Sidebar from "./Sidebar";

import styles from "App.module.css";

function App() {
    return (
        <div>
            <Sidebar />
            <div className={styles.content}>Hi</div>
        </div>
    );
}

export default App;

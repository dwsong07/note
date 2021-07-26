import React from "react";
import Sidebar from "./Sidebar";
import Editor from "Editor";
import { RootProvider } from "store";
import RootStore from "store/RootStore";

import styles from "App.module.css";

const rootStore = new RootStore();

function App() {
    return (
        <div>
            <RootProvider value={rootStore}>
                <Sidebar />
                <div className={styles.content}>
                    <Editor />
                </div>
            </RootProvider>
        </div>
    );
}

export default App;

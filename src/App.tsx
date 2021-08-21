import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Editor from "Editor";

import styles from "App.module.css";
import Note from "./Note";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Sidebar />
                <div className={styles.content}>
                    <Route path="/" component={Editor} exact />
                    <Route path="/note/:id" component={Note} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

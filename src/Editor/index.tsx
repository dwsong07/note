import React, { useState } from "react";

import styles from "Editor/index.module.css";

function Editor() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setContent(e.target.value);

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("저장되었습니다!");
        localStorage.setItem(
            localStorage.length.toString(),
            JSON.stringify({ title, content })
        );
    };

    return (
        <form onSubmit={onFormSubmit} className={styles.Editor}>
            <table>
                <tbody>
                    <tr className={styles.title}>
                        <td>
                            <label htmlFor="title">제목: </label>
                        </td>
                        <td>
                            <input
                                value={title}
                                onChange={onTitleChange}
                                id="title"
                            />
                        </td>
                    </tr>
                    <tr className={styles.content}>
                        <td>
                            <label htmlFor="content">내용: </label>
                        </td>
                        <td>
                            <textarea
                                value={content}
                                onChange={onContentChange}
                                id="content"
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className={styles.submit}>
                저장
            </button>
        </form>
    );
}

export default Editor;

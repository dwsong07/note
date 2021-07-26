import React, { useState } from "react";

import styles from "Sidebar/Search.module.css";

function Search() {
    const [search, setSearch] = useState("");

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                className={styles.Search}
                placeholder="검색"
                value={search}
                onChange={onSearchChange}
            />
        </form>
    );
}

export default Search;

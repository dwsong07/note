import React, { useState } from "react";

import styles from "Sidebar/Search.module.css";

function Search() {
    const [search, setSearch] = useState("");

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    return (
        <input
            className={styles.Search}
            placeholder="검색"
            value={search}
            onChange={onSearchChange}
        />
    );
}

export default Search;

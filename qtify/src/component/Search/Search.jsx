import React from "react";
import styles from "../Search/Search.module.css";

import SearchIcon from '@mui/icons-material/Search';


const Search = ({search}) => {

    return (
        <form className={styles.wrapper}>
            <input
                className={styles.search}
                placeholder={search}
            />
            <button className={styles.searchButton} type="submit"><SearchIcon style={{justifyContent:"center"}} /></button>
        </form>
    );
}

export default Search;
import React from "react";
import styles from "../Search/Search.module.css";

import SearchIcon from '@mui/icons-material/Search';

function Search({searchData, placeholder})
{
 let value;
    const onSubmit=(e,value)=>{
        e.preventDefault();

    }
return (
    <div style={{position:'relative'}}>
        <form
        className={styles.wrapper}
      onSubmit={(e)=>{
        onSubmit(e, value);
      }}
      >
        <div>
            <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            required
            />
        </div>
        <div>
            <button className={styles.searchButton} type="submit">
                <SearchIcon/>
            </button>
        </div>
      </form>
    </div>
)
}

export default Search;
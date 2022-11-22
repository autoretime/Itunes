import React from "react";
import styles from "./SearchMusic.module.css";

const SearchMusic = ({ searchChangeHandler, submitSearchHandler }) => {
  return (
    <div className={styles.SearchMusic}>
      <form onSubmit={submitSearchHandler}>
        <input
          type="text"
          placeholder={"Search"}
          onChange={(event) => searchChangeHandler(event.target.value)}
        />
        <button type={"submit"}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchMusic;

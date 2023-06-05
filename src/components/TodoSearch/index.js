import styles from "./TodoSearch.module.css";
import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue} =
    useContext(TodoContext);
  return (
    <input
      placeholder="Ingresa texto para buscar"
      className={styles.TodoSearch}
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };

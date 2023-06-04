import styles from './TodoSearch.module.css';
import React, { useState } from "react";

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  
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
  
  export {TodoSearch};
import React, { useContext } from 'react';
import styles from './TodoCounter.module.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total,
  } = useContext(TodoContext);
    return (
      <h1 className={styles.TodoCounter}>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }

  export {TodoCounter};
import styles from './Todolist.module.css';

function TodoList({children}) {
  return (
    <ul className={styles.TodoList}>
      {children}
    </ul>);
}

export {TodoList};
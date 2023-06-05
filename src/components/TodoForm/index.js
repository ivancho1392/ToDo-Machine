import React, { useContext, useState } from "react";
import styles from "./TodoForm.module.css";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newTodoValue);
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label className={styles.label}>Escribe tu nuevo ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        className={styles.textarea}
        placeholder="Tarea por completar..."
      />
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancelar
        </button>
        <button type="submit" className={styles.addButton}>
          Añadir ToDo
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

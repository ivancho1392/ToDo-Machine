import React, { useContext } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoForm } from "./TodoForm";
import { Modal } from "./Modal";
import { TodoContext } from "../TodoContext";

export default function AppUI() {
  const { searchedTodos, completeTodo, deleteTodo, loading, error, openModal, setOpenModal, totalTodos } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error!!</p>}
        {(!loading && totalTodos === 0) && <p>¡Crea tu primer ToDo!</p>}
        {(!loading && totalTodos > 0 && searchedTodos.length == 0) && <p>Ninguna coincidencia</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton 
        onCreate={() => setOpenModal(!openModal)}
      />

      {openModal && 
        <Modal>
          <TodoForm />  
        </Modal>}
    </>
  );
}


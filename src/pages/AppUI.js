import React, { useContext } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";
import { TodoContext } from "../TodoContext";

function AppUI() {
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
export { AppUI };

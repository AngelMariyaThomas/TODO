import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
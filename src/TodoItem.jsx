import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, handleDelete }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => handleDelete(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;

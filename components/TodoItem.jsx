import React from "react";
import "./TodoItem.css";

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <>
      <li className="task-item" key={id}>
        <div className="task-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleTodoClick}
          />
        </div>
        <div className="task-text">
          {" "}
          <p>{task}</p>
        </div>
      </li>
    </>
  );
}

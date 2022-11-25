import React from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export function TodoList({ todos, toggleTodo }) {
  return (
    <ul className="task-list">
      {todos.map((todo) => {
        return <TodoItem toggleTodo={toggleTodo} key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

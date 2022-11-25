import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { TodoList } from "../components/TodoList";
import "./App.css";

const KEY = "todoApp.todos";

export function App() {
  const [todos, setTodos] = useState([]);
  const refInput = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    const task = refInput.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), task, completed: false }];
    });
    refInput.current.value = null;
  };

  const handleDeleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const howTask = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div className="title">
        <h1>To do App</h1>
      </div>
      <div className="container">
        <input
          className="input-task"
          ref={refInput}
          type="text"
          placeholder="ingrese una nueva tarea"
        />
        <div className="buttons-container">
          <button className="button-add" onClick={handleAddTodo}>
            <FaPlus /> Agregar
          </button>
          <button className="button-del" onClick={handleDeleteTodo}>
            <FaRegTrashAlt /> Eliminar
          </button>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div className="rest-of-task">
          {howTask === 0
            ? `No tienes tareas por completar`
            : `Tienes ${howTask} ${
                howTask > 1 ? "tareas " : "tarea "
              } por completar`}
        </div>
      </div>
    </>
  );
}

export default App

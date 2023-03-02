import React, { useEffect } from "react";
import styles from "../styles/todo.module.css";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

const ToDoList = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoWrapper}>
        <h1 className={styles.title}>Marc Off</h1>
        <p>To-Do list</p>
        <Form
          todos={todos}
          input={input}
          setInput={setInput}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <List filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default ToDoList;

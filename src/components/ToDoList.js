import React from "react";
import styles from "../styles/todo.module.css";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

const ToDoList = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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
        />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default ToDoList;

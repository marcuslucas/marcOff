import React from "react";
import styles from "../styles/list.module.css";

const ToDo = (props) => {
  const handleDelete = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const handleChange = () => {
    if (props.todo.completed === true) {
      props.setTodos([
        ...props.todos.filter((todo) => todo.id !== props.todo.id),
        { ...props.todo, completed: false },
      ]);
    } else {
      props.setTodos([
        ...props.todos.filter((todo) => todo.id !== props.todo.id),
        { ...props.todo, completed: true },
      ]);
    }
  };

  return (
    <div className={styles.todoWrapper}>
      <div className={styles.todoCheck}>
        <label className={styles.todoLabel}>
          <input
            className={styles.todoInput}
            type="checkbox"
            onChange={handleChange}
            checked={props.todo.completed}
          />
          <span className={styles.todoBox}></span>
          <div className={styles.todoText}>{props.todo.text}</div>
          <ins className={styles.todoIns}>
            <i>{props.todo.text}</i>
          </ins>
        </label>
      </div>
      <div className={styles.todoBtns} onClick={handleDelete}>
        <span className={styles.trashIcon}></span>
        <span className={styles.trashText}>Delete</span>
      </div>
    </div>
  );
};

export default ToDo;

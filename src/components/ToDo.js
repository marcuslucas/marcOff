import React from "react";
import styles from "../styles/list.module.css";

const ToDo = (props) => {
  const handleDelete = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  return (
    <div className={styles.todoWrapper}>
      <div className={styles.todoText}>
        <p>{props.todo.text}</p>
      </div>
      <div className={styles.todoBtns}>
        <span className={styles.trashIcon} onClick={handleDelete}></span>
      </div>
    </div>
  );
};

export default ToDo;

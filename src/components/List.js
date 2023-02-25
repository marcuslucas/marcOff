import React from "react";
import styles from "../styles/list.module.css";
import ToDo from "./ToDo";

const List = (props) => {
  return (
    <div className={styles.listWrapper}>
      {props.todos &&
        props.todos.map((todo) => (
          <ToDo
            setTodos={props.setTodos}
            todos={props.todos}
            todo={todo}
            key={todo.id}
          />
        ))}
    </div>
  );
};

export default List;

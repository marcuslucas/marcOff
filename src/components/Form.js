import React from "react";
import styles from "../styles/form.module.css";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.input, completed: false, id: Math.random() * 1000 },
    ]);

    props.setInput("");
  };

  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    props.setInput(e.target.value);
  };

  return (
    <div className={styles.formWrapper}>
      <form>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.formInput}
            onChange={inputTextHandler}
            value={props.input}
          />
          <button onClick={handleSubmit} type="submit">
            +
          </button>
        </div>
        <div className={styles.formSelect}>
          <select name="todos" className={styles.formFilter}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;

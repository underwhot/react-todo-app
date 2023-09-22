import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    text !== ''
      ? addTodo(text)
      : document.querySelector('.inputForm input').focus();
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form className="inputForm" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button type="submit" title="Add new todo">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;

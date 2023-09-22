import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.iscompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon}></RiTodoFill>
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      ></RiDeleteBin2Line>
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      ></FaCheck>
    </div>
  );
}

export default Todo;
// onDoubleClick={() => deleteTodo(todo.id)}
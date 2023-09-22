import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  resetTodos,
  deletecompletedTodos,
  complitedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiDeleteBin2Line />
      </Button>
      <Button
        title="Clear completed todos"
        onClick={deletecompletedTodos}
        disabled={!complitedTodosExist}
      >
        <RiRefreshLine />
      </Button>
    </div>
  );
}

export default TodosActions;

import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            ></Todo>
          );
        })
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default TodoList;

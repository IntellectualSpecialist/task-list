import { observer } from "mobx-react-lite";
import { todo } from "../../stores/todo";
import styles from './TodoList.module.scss';
import Task from "../Task/Task";

const TodoList = observer(() => {
  return (
    <ul className={styles.todolist}>
      {todo.todos.map((todoItem) =>
        <Task key={todoItem.id} todoItem={todoItem}/>
      )}
    </ul>
  )
});



export default TodoList;
import { observer } from "mobx-react-lite";
import { todo } from "../../stores/todo";
import styles from './Task.module.scss';

const Task = observer(({ todoItem }: { todoItem: {id: number; title: string; completed: boolean } }) => {
  return (
    <li className={styles.task}>
      <div className={styles.task__header}>
        <button className={`${styles.task__button} ${styles.task__button_active}`} type="button">
          <span className="visually-hidden">Развернуть подзадачи</span>
        </button>
        <label className="visually-hidden" htmlFor="taks-title">Название задачи</label>
        <input className={styles.task__title} id="taks-title" type="text" value={todoItem.title} onChange={(evt) => todo.changeTodo(todoItem.id, evt.target.value)}/>
        <button onClick={() => todo.removeTodo(todoItem.id)}>x</button>
        <label className="visually-hidden" htmlFor="taks-check">Отметить выполненной</label>
        <input className={styles.task__check} id="task-check" type="checkbox" checked={todoItem.completed} onChange={() => todo.completeTodo(todoItem.id)}/>
      </div>
      <ul className={styles.task__sublist}>
        <li>
          <div className={`${styles.task__header} ${styles.task__header_sub}`}>
            <button className={`${styles.task__button} ${styles.task__button_active}`} type="button">
              <span className="visually-hidden">Развернуть подзадачи</span>
            </button>
            <label className="visually-hidden" htmlFor="taks-title">Название задачи</label>
            <input className={`${styles.task__title} ${styles.task__title_sub}`} id="taks-title" type="text" value={todoItem.title} onChange={(evt) => todo.changeTodo(todoItem.id, evt.target.value)}/>
            <button onClick={() => todo.removeTodo(todoItem.id)}>x</button>
            <label className="visually-hidden" htmlFor="taks-check">Отметить выполненной</label>
            <input className={`${styles.task__check} ${styles.task__check_sub}`} id="task-check" type="checkbox" checked={todoItem.completed} onChange={() => todo.completeTodo(todoItem.id)}/>
          </div>
        </li>
      </ul>
    </li>
  );
});

export default Task;
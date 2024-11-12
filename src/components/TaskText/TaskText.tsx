import { observer } from "mobx-react-lite";
import { todo } from "../../stores/todo";
import styles from './TaskText.module.scss';

const TaskText = () => {
  return (
    <div className={styles.tasktext}>
      <h2 className={styles.tasktext__title}>Задача 1</h2>
      <p className={styles.tasktext__text}>Текст задачи</p>
    </div>
  );
};

export default TaskText;
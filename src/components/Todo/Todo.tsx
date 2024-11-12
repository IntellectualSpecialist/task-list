import styles from './Todo.module.scss';
import TodoList from '../TodoList/TodoList';
import TaskText from '../TaskText/TaskText';

const Todo = () => {
  return (
    <section className={styles.todo}>
      <TodoList/>
      <TaskText/>
    </section>
  )
};

export default Todo;
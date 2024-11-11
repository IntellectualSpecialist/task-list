import { observer } from "mobx-react-lite";
import { todo } from "./stores/todo";

const Todo = observer(() => {
  return (
    <ul>
      {todo.todos.map((todoItem: { title: string, id: number, completed: boolean}) =>
        <li className="todo" key={todoItem.id}>
          <input type="checkbox" checked={todoItem.completed} onChange={() => todo.completeTodo(todoItem.id)}/>
          <input type="text" value={todoItem.title} onChange={(evt) => todo.changeTodo(todoItem.id, evt.target.value)}/>
          <button onClick={() => todo.removeTodo(todoItem.id)}>x</button>
        </li>
      )}
    </ul>
  )
});

export default Todo;
import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    {id: 0, title: 'Задача 1', completed: false},
    {id: 1, title: 'Задача 2', completed: false},
    {id: 2, title: 'Задача 3', completed: false}
  ]

  constructor () {
    makeAutoObservable(this)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  changeTodo(id: number, value: string) {
    this.todos = this.todos.map((todo) => todo.id === id ? {...todo, title: value} : todo)
  }
}

export const todo = new Todo()
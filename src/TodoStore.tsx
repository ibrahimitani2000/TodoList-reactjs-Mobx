import { action, computed, makeObservable, observable } from "mobx";
import * as React from "react";
interface TodoItems {
  id: number;
  title: string;
  completed: boolean;
}
export class TodoStoreImpl {
  todos: TodoItems[] = [];
  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      status: computed,
    });
  }
  addTodo(title: string) {
    const item: TodoItems = {
      id: +Math.random().toFixed(4),
      title,
      completed: false,
    };
    this.todos.push(item);
  }
  toggleTodo(id: number) {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index > -1) {
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
  get status() {
    let completed = 0;
    let remaining = 0;
    this.todos.forEach((todo) => {
      if (todo.completed) {
        completed++;
      } else {
        remaining++;
      }
    });
    return { remaining, completed };
  }
}
export const TodoStore = new TodoStoreImpl();

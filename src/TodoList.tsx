import React, { useState } from "react";
import { TodoStoreImpl } from "./TodoStore";
import { observer } from "mobx-react";
interface TodoListProps {
  todoStore: TodoStoreImpl;
}
const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
  const status = todoStore.status;
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <div>Todo List</div>
      <div>
        Completed:{status.completed} Remaining:{status.remaining}
      </div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        type="text"
      />
      <button
        type="submit"
        onClick={() => {
          if (value) {
            todoStore.addTodo(value);
            setValue("");
          }
        }}
      >
        Submit
      </button>
      <ul>
        {todoStore.todos.map((todo) => {
          return (
            <li onClick={() => todoStore.toggleTodo(todo.id)}>
              [{todo.completed ? "x " : " "}]{todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
});
export default TodoList;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import { TodoStore, TodoStoreImpl } from "./TodoStore";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todoStore={TodoStore} />
      </header>
    </div>
  );
}

export default App;

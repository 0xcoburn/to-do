import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //useState
  const [inputText, setInputText] = React.useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [displayedTodos, setDisplayedTodos] = useState([]);

  //useEffect
  useEffect(() => {
    displayTodosHandler();
  }, [todos, filter]);

  const displayTodosHandler = () => {
    switch (filter) {
      case "completed":
        setDisplayedTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setDisplayedTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setDisplayedTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Matt's to do list</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setFilter={setFilter}
      />
      <TodoList
        displayedTodos={displayedTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;

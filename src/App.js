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
    getLocalTodos();
    getLocalDisplayedTodos();
    getLocalFilter();
  }, []);

  useEffect(() => {
    displayTodosHandler();
    saveLocalTodos();
    saveLocalDisplayedTodos();
    saveLocalFilter();
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

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const saveLocalFilter = () => {
    localStorage.setItem("filter", JSON.stringify(filter));
  };

  const saveLocalDisplayedTodos = () => {
    localStorage.setItem("displayedTodos", JSON.stringify(displayedTodos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosLocal);
    }
  };

  const getLocalFilter = () => {
    if (localStorage.getItem("filter") === null) {
      localStorage.setItem("filter", JSON.stringify([]));
    } else {
      let filterLocal = JSON.parse(localStorage.getItem("filter"));
      setFilter(filterLocal);
    }
  };

  const getLocalDisplayedTodos = () => {
    if (localStorage.getItem("DisplayedTodos") === null) {
      localStorage.setItem("displayedTodos", JSON.stringify([]));
    } else {
      let displayedTodosLocal = JSON.parse(
        localStorage.getItem("displayedTodos")
      );
      setDisplayedTodos(displayedTodosLocal);
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

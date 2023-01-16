import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    async function fetchtodos() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const todos = await response.json();
      setTodos(todos.slice(0, 20));
    }
    fetchtodos();
  }, []);

  return (
    <div className="App">
      <List list={todos} onClick={setTodos} />
    </div>
  );
}

export default App;

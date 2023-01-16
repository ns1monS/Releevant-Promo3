import { useState, useEffect } from "react";
import List from "../../components/List/List";

export default function Todos() {
  const [todos, setTodos] = useState(null);

  useEffect(function () {
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data.slice(0, 20));
    }
    fetchTodos();
  }, []);
  console.log(todos);

  return (
    <>
      <h1>Todos View</h1>
      <List items={todos} setState={setTodos} />
    </>
  );
}

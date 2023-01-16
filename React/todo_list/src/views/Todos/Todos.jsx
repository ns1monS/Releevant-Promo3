import { useState, useEffect } from "react";
import List from "../../components/List/List";
import Form from "../../components/Form/Form";
import { v4 as uuid } from "uuid";
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
  function onSubmit(e, titleTodo) {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: titleTodo,
      completed: false,
      userId: 1,
    };
    setTodos([newTodo, ...todos]);
  }
  return (
    <>
      <h1>Todos View</h1>
      <Form setState={setTodos} onSubmit={onSubmit} />
      <List items={todos} setState={setTodos} />
    </>
  );
}

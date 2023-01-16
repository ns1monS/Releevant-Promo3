import { useState } from "react";
import "./List.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function List({ list, onClick }) {
  const [newTodo, setNewTodo] = useState("");

  function addNewTodo(e) {
    setNewTodo(e.target.value);
  }

  // function addTodo(e) {
  //   e.preventDefault();
  //   if (newTodo === "") {
  //     return;
  //   }
  //   const addList = [...list];
  //   addList.push({
  //     userId: 1,
  //     id: list.length + 1,
  //     title: newTodo,
  //     completed: false,
  //   });
  //   setNewTodo("");
  //   onClick(addList);
  // }

  function addTodo(e) {
    e.preventDefault();

    onClick([
      ...list,
      {
        userId: 1,
        id: list.length + 1,
        title: newTodo,
        completed: false,
      },
    ]),
      setNewTodo("");
  }

  function handleClick(id, e) {
    e.stopPropagation();
    const newList = list.filter((item) => item.id !== id);
    onClick(newList);
  }

  function checked(index) {
    const newListCheck = [...list];
    newListCheck[index].completed = !newListCheck[index].completed;
    onClick(newListCheck);
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ol className="list-group ">
        <form onSubmit={addTodo}>
          <input value={newTodo} onChange={addNewTodo} />
          <button type="submit">añadir</button>
        </form>
        {list.map((todo, index) => (
          <div
            onClick={() => checked(index)}
            className={todo.completed ? "todolistchecked" : "todolist"}
          >
            <li
              key={index}
              className={todo.completed ? "checked" : "notchecked"}
            >
              {todo.title}
            </li>
            <button
              className={
                todo.completed ? "btn btn-danger" : "btn btn-outline-danger"
              }
              type="button"
              onClick={(e) => handleClick(todo.id, e)}
            >
              X
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
}

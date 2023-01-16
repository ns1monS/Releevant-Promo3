import { useState } from "react";

export default function Form({ setState, state, onSubmit }) {
  const [newTodo, setNewTodo] = useState("");
  function handleInput(e) {
    setNewTodo(e.target.value);
  }
  return (
    <form
      onSubmit={(e) => onSubmit(e, newTodo)}
      className="form-group container"
    >
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Introducir un nuevo todo"
        value={newTodo}
        onChange={handleInput}
      />
    </form>
  );
}

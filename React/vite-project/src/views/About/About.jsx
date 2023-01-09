import { useState } from "react";

export default function About() {
  // const todoList = [
  //   {
  //     id: 1,
  //     title: "Aprender a pasar props a los componentes",
  //   },
  //   {
  //     id: 2,
  //     title: "Poner el return en los componentes",
  //   },
  //   {
  //     id: 3,
  //     title: "Devolver un solo elemento en el JSX",
  //   },
  //   {
  //     id: 4,
  //     title: "Aprender a crear rutas con React Router",
  //   },
  //   {
  //     id: 5,
  //     title: "Cambiar los estados de un elemento padre a traves de su hijo",
  //   },
  // ];
  const [todoList, setList] = useState([
    {
      id: 1,
      title: "Aprender a pasar props a los componentes",
    },
    {
      id: 2,
      title: "Poner el return en los componentes",
    },
    {
      id: 3,
      title: "Devolver un solo elemento en el JSX",
    },
    {
      id: 4,
      title: "Aprender a crear rutas con React Router",
    },
    {
      id: 5,
      title: "Cambiar los estados de un elemento padre a traves de su hijo",
    },
  ]);

  //no se queq hago aqui pero funciona mejor no tocar nada
  const removeElement = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setList(newTodoList);
  };

  // const underlineElement = (index) => {
  //   const underlineTodoList = todoList.filter((_, i) =>);
  // };

  return (
    <div>
      <h1>Soy el About</h1>
      {todoList.map((idList, index) => (
        <ul className={`nav-item `} key={index}>
          <li className="nav-link active" aria-current="page" key={index}>
            <span onClick={() => underlineElement(index)}>{idList.title}</span>
            <button type="button" onClick={() => removeElement(index)}>
              Borrar
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

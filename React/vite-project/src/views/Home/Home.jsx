// import { HomeMain } from "../../components/Const/HomeMain";
// import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [textoBase, setTextoBase] = useState(false);

  function CambiarTexto() {
    setTextoBase(!textoBase);
  }

  return (
    <div>
      <h1>
        <p> {textoBase ? "En el texto pone patata" : "Y ahora pone judias"}</p>
        <button onClick={CambiarTexto}>Cambia el texto maquina </button>
      </h1>
    </div>
  );
}

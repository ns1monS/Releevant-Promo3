import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState("");
  const [caracter, setCaracter] = useState([]);

  useEffect(() => {
    async function obtenerPokemones() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemones}`
      );
      const detalles = await response.json();
      setCaracter(detalles);
    }
    obtenerPokemones();
  }, [pokemones]);

  function buscarPokemon(e) {
    e.preventDefault();
    setPokemones(e.target[0].value);
  }

  return (
    <div className=" text-center justify-content-md-center">
      <p>Busca tu pokemon</p>
      <form onSubmit={buscarPokemon}>
        <input />
        <button>buscar</button>
      </form>

      {!pokemones ? (
        <h3>No existe ese pokemon</h3>
      ) : (
        <ul>
          <li>
            <img src={caracter.sprites.front_default} alt="" />
          </li>
        </ul>
      )}
    </div>
  );
}

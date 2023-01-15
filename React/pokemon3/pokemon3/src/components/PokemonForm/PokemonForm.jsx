import { useState } from "react";

export default function PokemonForm({ setPokemon }) {
  const [wantedPokemon, setWantedPokemon] = useState("");

  function handlePokemon(e) {
    setWantedPokemon(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    //logica para mandar el pokemon que el usuario busque en el input
    setPokemon(wantedPokemon);
    setWantedPokemon("");
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Introduce Pokemon"
        value={wantedPokemon}
        onChange={handlePokemon}
      />
      <button>Buscar</button>
    </form>
  );
}

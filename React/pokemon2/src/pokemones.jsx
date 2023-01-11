import { useEffect, useState } from "react";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState();

  useEffect(() => {
    async function obtenerPokemones() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemones}`
      );
      const pokemones = await response.json();
      setPokemones(pokemones);
      console.log(await response.json());
    }
    obtenerPokemones();
  }, []);

  return (
    <div>
      <p>Busca tu pokemon</p>
      <form onSubmit={setPokemones()} action="">
        <input value={pokemones} type="text" />
        <button>buscar</button>
        <ul>
          {pokemones ? (
            <h3>No existe ese pokemons</h3>
          ) : (
            pokemones.map((pokemon) => (
              <li key={pokemon.forms.name}>{pokemon.forms.url}</li>
            ))
          )}
        </ul>
      </form>
    </div>
  );
};

export default Pokemones;

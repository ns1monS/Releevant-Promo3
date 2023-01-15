import PokemonForm from "../../src/components/PokemonForm/PokemonForm";
import { useState, useEffect } from "react";
import Pokemon from "../../src/components/Pokemon/Pokemon";

const initialMessage = "Aun no hay pokemon";

export default function PokemonView() {
  const [pokemonWanted, setPokemonWanted] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState();
  console.log(pokemon);

  useEffect(
    function () {
      if (pokemonWanted) {
        async function fetchPokemon() {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonWanted}`
          ); //acaba aqui el fetch
          if (response.status !== 200) {
            setMessage("No existe ese pokemon");
            setPokemon(null);
          }
          const data = await response.json();
          setPokemon(data);
        }
        fetchPokemon();
      }
    },
    [pokemonWanted]
  );

  return (
    <>
      <h1>Busca tu pokemon</h1>
      <PokemonForm setPokemon={setPokemonWanted} />
      <Pokemon pokemon={pokemon} message={message} />
    </>
  );
}

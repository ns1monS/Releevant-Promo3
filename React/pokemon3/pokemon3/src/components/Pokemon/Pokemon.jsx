export default function Pokemon({ pokemon, message }) {
  return (
    <div>
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        </div>
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
}

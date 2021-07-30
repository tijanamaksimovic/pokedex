import * as React from 'react';
import { usePokemons } from '../hooks/usePokemons';

export const PokemonList = () => {
  const pokemonsQuery = usePokemons();

  if (pokemonsQuery.isLoading) {
    return <p>Loading...</p>;
  }
  if (!pokemonsQuery.data) return null;
  console.log(`pokemonsQuery.data ${pokemonsQuery.data}`);

  return (
    <>
      {pokemonsQuery.data.map((pokemon) => (
        <div key={`${pokemon.id} ${pokemon.name}`}>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </>
  );
};

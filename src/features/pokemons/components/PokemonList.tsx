import * as React from 'react';
import { usePokemons } from '../hooks/usePokemons';
import { useEffect, useState } from 'react';
import { DetailQueries } from '@/features/pokemons/hooks/usePokemonDetails';

export const PokemonList = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const pokemonsQuery = usePokemons();
  const detailsQuery = DetailQueries(urls);

  useEffect(() => {
    const url: string[] = [];
    pokemonsQuery.data?.map((pokemon) => {
      url.push(pokemon.url);
    });
    setUrls(url);
  }, [pokemonsQuery.data]);

  if (pokemonsQuery.isLoading) {
    return <p>Loading...</p>;
  }
  if (!pokemonsQuery.data) return null;
  console.log(pokemonsQuery);
  console.log(detailsQuery);

  return (
    <>
      {pokemonsQuery.data.map((pokemon) => (
        <div key={`${pokemon.url} ${pokemon.name}`}>
          <p>{pokemon.name}</p>
        </div>
      ))}
    </>
  );
};

import { useQueries, useQuery } from 'react-query';

import { QueryConfig } from '@/lib/react-query';

import { getPokemonDetails } from '../api';

type UsePokeDetailsOptions = {
  url: string;
  config?: QueryConfig<typeof getPokemonDetails>;
};

export const usePokemonDetails = ({ url, config }: UsePokeDetailsOptions) => {
  return useQuery({
    ...config,
    queryKey: ['details', url],
    queryFn: () => getPokemonDetails(url),
    enabled: !!url,
  });
};

export const DetailQueries = (pokemonUrls: string[]) => {
  return useQueries(
    pokemonUrls.map((url) => {
      return {
        queryKey: ['pokemon', url],
        queryFn: () => getPokemonDetails(url),
      };
    })
  );
};

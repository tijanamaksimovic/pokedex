import { useQuery } from 'react-query';

import { QueryConfig } from '@/lib/react-query';

import { getPokemons } from '../api';

type UsePokemonsOptions = {
  config?: QueryConfig<typeof getPokemons>;
};

export const usePokemons = ({ config }: UsePokemonsOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(),
  });
};

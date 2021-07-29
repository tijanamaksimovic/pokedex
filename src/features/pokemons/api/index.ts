import { axios } from '@/lib/axios';

import { Pokemon } from '../types';

export const getPokemons = (): Promise<Pokemon[]> => {
  return axios.get(`/pokemon`);
};

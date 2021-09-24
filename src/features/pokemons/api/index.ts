import { axios } from '@/lib/axios';

import { Pokemon } from '../types';
import { AxiosResponse } from 'axios';

export const getPokemons = (): Promise<Pokemon[]> => {
  return axios.get(`/pokemon`);
};

export const getPokemonDetails = (url: string): Promise<AxiosResponse<any>> => {
  return axios.get(url);
};

export type Ability = {
  name: string;
};

export type Stat = {
  name: string;
};

export type PokeStat = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

export type Move = {
  name: string;
};

export type Evolution = {};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: string;
  abilities: Ability[];
  order: number;
  stats: string;
  evolutions: Evolution[];
  moves: Move[];
};

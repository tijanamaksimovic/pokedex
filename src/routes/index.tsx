import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@/features/misc';
import { PokemonList } from '@/features/pokemons/components/PokemonList';

export const AppRoutes = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/pokedex">
        <PokemonList />
      </Route>
      {/*<Route path="*">*/}
      {/*  <Redirect to="/" />*/}
      {/*</Route>*/}
    </Router>
  );
};

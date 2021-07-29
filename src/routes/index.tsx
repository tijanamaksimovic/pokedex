import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Home } from '@/features/misc';

export const AppRoutes = () => {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Router>
  );
};

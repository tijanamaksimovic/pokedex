import * as React from 'react';
import { AppProvider } from './context';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;

import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from 'react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>;
    </QueryClientProvider>
  );
};

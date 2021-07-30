import { QueryClient, DefaultOptions, UseQueryOptions } from 'react-query';
import { PromiseValue } from 'type-fest';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// eslint-disable-next-line no-unused-vars
export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
  PromiseValue<ReturnType<FetcherFnType>>
>;

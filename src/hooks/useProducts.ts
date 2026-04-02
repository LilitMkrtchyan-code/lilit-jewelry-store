import { useInfiniteQuery } from '@tanstack/react-query';
type UseProductsParams = Omit<GetProductsParams, 'page'>;
import type { GetProductsParams } from '../types/api';
import { getProducts } from '../api/products';

export const useProducts = (params: UseProductsParams = {}) => {
  return useInfiniteQuery({
    queryKey: ['products', params],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      getProducts({
        ...params,
        page: pageParam as number,
      }),
    getNextPageParam: lastPage => lastPage.nextPage,
    staleTime: 1000 * 60 * 5,
  });
};

import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getProducts(pageParam as number, 12),
    getNextPageParam: lastPage => lastPage.nextPage,
    staleTime: 1000 * 60 * 5,
  });
};

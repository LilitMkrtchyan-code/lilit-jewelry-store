import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';

export const useBestsellers = () => {
  return useQuery({
    queryKey: ['products', 'bestsellers'],
    queryFn: () => getProducts({ page: 0, limit: 12, sort: 'popularity' }),
    staleTime: 1000 * 60 * 5,
  });
};

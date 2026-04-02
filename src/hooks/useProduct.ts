import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../api/product';

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

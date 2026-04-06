import { useQuery } from '@tanstack/react-query';
import type { Product } from '../types/product';
import { getProducts } from '../api/products';

export const useSimilarProducts = (product: Product) => {
  return useQuery({
    queryKey: ['products', 'similar', product.id],
    queryFn: () =>
      getProducts({
        page: 0,
        limit: 8,
        category: product.category,
        // stone: product.stone?.[0],
        // material: product.material?.[0],
        excludeId: product.id,
      }),
    staleTime: 1000 * 60 * 5,
  });
};

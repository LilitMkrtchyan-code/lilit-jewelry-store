import { MOCK_PRODUCTS } from '../moc/mockProducts';
import type { Product } from '../types/product';
import type { PaginatedResponse } from '../types/api';

export const getProducts = async (
  page: number,
  limit: number = 12,
): Promise<PaginatedResponse<Product>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const start = page * limit;
      const end = start + limit;

      const data = MOCK_PRODUCTS.slice(start, end);
      const nextPage = end < MOCK_PRODUCTS.length ? page + 1 : null;
      resolve({
        data,
        nextPage,
        totalCount: MOCK_PRODUCTS.length,
      });
    }, 800);
  });
};

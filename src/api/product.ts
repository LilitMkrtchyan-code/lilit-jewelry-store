import { MOCK_PRODUCTS } from '../moc/mockProducts';
import type { Product } from '../types/product';

export const getProductById = async (id: string): Promise<Product | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const product = MOCK_PRODUCTS.find(p => p.id === id) ?? null;
      resolve(product);
    }, 800);
  });
};

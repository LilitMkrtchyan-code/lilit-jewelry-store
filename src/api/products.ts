import { MOCK_PRODUCTS } from '../moc/mockProducts';
import type { GetProductsParams, PaginatedResponse } from '../types/api';
import type { Product } from '../types/product';

export const getProducts = async (
  params: GetProductsParams,
): Promise<PaginatedResponse<Product>> => {
  const {
    page,
    limit = 12,
    category,
    material,
    stone,
    priceMin,
    priceMax,
    sort,
    availability,
    excludeId,
  } = params;
  return new Promise(resolve => {
    setTimeout(() => {
      let products = [...MOCK_PRODUCTS];

      if (category) products = products.filter(p => p.category === category);
      if (material) products = products.filter(p => p.material?.includes(material));
      if (stone) products = products.filter(p => p.stone?.includes(stone));
      if (priceMin !== undefined) products = products.filter(p => p.price >= priceMin);
      if (priceMax !== undefined) products = products.filter(p => p.price <= priceMax);
      if (excludeId) products = products.filter(p => p.id !== excludeId);

      if (availability === 'inStock') {
        products = products.filter(p => p.inStock);
      } else if (availability === 'onOrder') {
        products = products.filter(p => !p.inStock);
      }

      if (sort === 'price_asc') {
        products.sort((a, b) => a.price - b.price);
      } else if (sort === 'price_desc') {
        products.sort((a, b) => b.price - a.price);
      } else if (sort === 'newest') {
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else if (sort === 'popularity') {
        products.sort((a, b) => b.popularity - a.popularity);
      }

      const start = page * limit;
      const end = start + limit;

      const data = products.slice(start, end);
      const nextPage = end < products.length ? page + 1 : null;

      resolve({
        data,
        nextPage,
        totalCount: products.length,
      });
    }, 800);
  });
};

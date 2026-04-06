import type { CategorySlug, Collection, Material, Stone } from './product';

export type PaginatedResponse<T> = {
  data: T[];
  nextPage: number | null;
  totalCount: number;
};

export type SortOption = 'price_asc' | 'price_desc' | 'newest' | 'popularity';

export type CatalogFiltersProps = Omit<GetProductsParams, 'page' | 'limit'>;

export type GetProductsParams = {
  page: number;
  limit?: number;
  category?: CategorySlug;
  collection: Collection;
  material?: Material;
  stone?: Stone;
  priceMin?: number;
  priceMax?: number;
  sort?: SortOption;
  availability?: 'inStock' | 'onOrder';
  excludeId?: string;
};

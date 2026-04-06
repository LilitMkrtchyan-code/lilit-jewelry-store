import { useSearchParams } from 'react-router-dom';
import type { CatalogFiltersProps, GetProductsParams } from '../types/api';

export const useCatalogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: CatalogFiltersProps = {
    category: searchParams.get('category') ?? undefined,
    material: (searchParams.get('material') as GetProductsParams['material']) ?? undefined,
    collection: (searchParams.get('collection') as GetProductsParams['collection']) ?? undefined,
    stone: (searchParams.get('stone') as GetProductsParams['stone']) ?? undefined,
    sort: (searchParams.get('sort') as GetProductsParams['sort']) ?? undefined,
    priceMin:
      searchParams.get('priceMin') !== null ? Number(searchParams.get('priceMin')) : undefined,
    priceMax:
      searchParams.get('priceMax') !== null ? Number(searchParams.get('priceMax')) : undefined,
    availability:
      (searchParams.get('availability') as GetProductsParams['availability']) ?? undefined,
  };

  const setFilter = (updates: Record<string, string | null>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null) {
          next.delete(key);
        } else {
          next.set(key, value);
        }
      });
      return next;
    });
  };

  const resetFilters = () => setSearchParams({});

  const hasActiveFilters = Object.values(filters).some(v => v !== undefined);

  return { filters, setFilter, resetFilters, hasActiveFilters };
};

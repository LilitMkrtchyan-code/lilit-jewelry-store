import type { Product } from '../../../../types/product';

export type productGridProps = {
  columns: number;
  currentCount: number;
  totalCount: number;
  products: Product[];
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  isError: boolean;
};

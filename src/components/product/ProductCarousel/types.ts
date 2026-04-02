import type { Product } from '../../../types/product';

export type ProductCarouselProps = {
  products: Product[];
  width?: string | number;
  message?: string;
  onClickProduct: (product: Product) => void;
  onClickBook: () => void;
  isLoading: boolean;
  isError: boolean;
  className?: string;
};

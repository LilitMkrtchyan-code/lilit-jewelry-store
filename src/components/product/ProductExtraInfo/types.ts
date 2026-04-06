import type { Product } from '../../../types/product';

export type ExtraInfoSection = {
  key: string;
  labelKey: string;
  getContentKey: (nameKey: string) => string;
};

export type ProductExtraInfoProps = {
  product: Product;
};

export type ActiveSection = string | null;

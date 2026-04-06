import type { ExtraInfoSection } from './types';

const BASE_KEY = 'product.productDetails.extraInfo';

export const EXTRA_INFO_SECTIONS: ExtraInfoSection[] = [
  {
    key: 'details',
    labelKey: `${BASE_KEY}.details.label`,
    getContentKey: nameKey => `products.${nameKey}.details`,
  },
  {
    key: 'shipping',
    labelKey: `${BASE_KEY}.shipping.label`,
    getContentKey: nameKey => `products.${nameKey}.shipping`,
  },
  {
    key: 'materials',
    labelKey: `${BASE_KEY}.materials.label`,
    getContentKey: nameKey => `products.${nameKey}.materialsInfo`,
  },
];

import type { FilterSectionConfig } from './types';

export const FILTER_SECTIONS: FilterSectionConfig[] = [
  {
    key: 'sort',
    labelKey: 'catalog.filters.sort',
    optionsKey: 'catalog.sortOptions',
    type: 'radio',
  },
  {
    key: 'category',
    labelKey: 'catalog.filters.category',
    optionsKey: 'categories',
    type: 'checkbox',
  },
  {
    key: 'material',
    labelKey: 'catalog.filters.material',
    optionsKey: 'materials',
    type: 'checkbox',
  },
  {
    key: 'stone',
    labelKey: 'catalog.filters.stone',
    optionsKey: 'stones',
    type: 'checkbox',
  },
  {
    key: 'price',
    labelKey: 'catalog.filters.price',
    type: 'range',
  },
  {
    key: 'availability',
    labelKey: 'catalog.filters.availability',
    optionsKey: 'catalog.availabilityOptions',
    type: 'checkbox',
  },
];

import type { useCatalogFilters } from '../../../../hooks/useCatalogFilters';

type SelectionFilter = {
  key: string;
  labelKey: string;
  optionsKey: string;
  type: 'radio' | 'checkbox';
};

type RangeFilter = {
  key: string;
  labelKey: string;
  type: 'range';
  optionsKey?: never;
};

export type FilterSectionConfig = SelectionFilter | RangeFilter;

export type FilterPanelProps = {
  filters: ReturnType<typeof useCatalogFilters>['filters'];
  setFilter: ReturnType<typeof useCatalogFilters>['setFilter'];
};

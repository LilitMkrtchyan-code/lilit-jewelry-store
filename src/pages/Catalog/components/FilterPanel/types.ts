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

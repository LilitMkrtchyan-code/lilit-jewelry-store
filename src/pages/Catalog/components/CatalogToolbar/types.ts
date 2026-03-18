export type CatalogToolbarProps = {
  isFiltersOpen: boolean;
  columns: number;
  totalItems: number;
  onToggleFilters: () => void;
  onChangeColumns: (newColumns: number) => void;
  availableOptions: number[];
  hiddenOptions: number[];
};

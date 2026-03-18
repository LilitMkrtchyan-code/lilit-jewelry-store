export type GridSwitcherProps = {
  availableOptions: number[];
  columns: number;
  onChange: (newColumns: number) => void;
  hiddenOptions?: number[];
};

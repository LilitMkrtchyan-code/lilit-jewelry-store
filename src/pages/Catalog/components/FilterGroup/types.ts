export type FilterGroupProps = {
  options: Record<string, string>;
  type: 'checkbox' | 'radio';
  name: string;
  activeValue?: string;
  onSelect: (key: string, value: string | null) => void;
};

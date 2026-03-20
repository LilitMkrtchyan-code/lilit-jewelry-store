import type { FilterGroupProps } from './types';
import SelectionControl from '../../../../components/common/SelectionControl';
import styles from './styles.module.css';

const FilterGroup = ({ options, type, name }: FilterGroupProps) => {
  if (typeof options !== 'object' || options === null) {
    return null;
  }

  return (
    <div className={styles.filterGroup}>
      {Object.entries(options).map(([key, label]) => (
        <SelectionControl
          key={key}
          label={label}
          type={type}
          name={type === 'radio' ? name : key}
        />
      ))}
    </div>
  );
};
export default FilterGroup;

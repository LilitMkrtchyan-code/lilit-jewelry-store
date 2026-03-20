import type { SelectionControlProps } from './types';
import styles from './styles.module.css';

const SelectionControl = ({ label, type, className = '', ...props }: SelectionControlProps) => {
  const controlStyle = type === 'checkbox' ? styles.checkbox : styles.radio;
  return (
    <label className={styles.selectionControl}>
      <input type={type} className={styles.nativeInput} {...props} />
      <span className={`${styles.customControl} ${controlStyle} ${className}`} />
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};
export default SelectionControl;

import type { GridSwitcherProps } from './types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const GRIDICONS: Record<number, React.ReactNode> = {
  1: (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <rect x="0.5" y="0.5" width="19" height="13" rx="1" stroke="currentColor" />
    </svg>
  ),
  2: (
    <svg width="20" height="12" viewBox="0 0 20 14" fill="none">
      <rect x="6" y="0" width="1" height="14" fill="currentColor" />
      <rect x="13" y="0" width="1" height="14" fill="currentColor" />
    </svg>
  ),
  3: (
    <svg width="20" height="12" viewBox="0 0 20 14" fill="none">
      <rect x="4" y="0" width="1" height="14" fill="currentColor" />
      <rect x="9.5" y="0" width="1" height="14" fill="currentColor" />
      <rect x="15" y="0" width="1" height="14" fill="currentColor" />
    </svg>
  ),
  4: (
    <svg width="20" height="12" viewBox="0 0 20 14" fill="none">
      <rect x="2" y="0" width="1" height="14" fill="currentColor" />
      <rect x="7" y="0" width="1" height="14" fill="currentColor" />
      <rect x="12" y="0" width="1" height="14" fill="currentColor" />
      <rect x="17" y="0" width="1" height="14" fill="currentColor" />
    </svg>
  ),
  5: (
    <svg width="20" height="12" viewBox="0 0 20 14" fill="none">
      <rect x="1" y="0" width="1" height="14" fill="currentColor" />
      <rect x="5" y="0" width="1" height="14" fill="currentColor" />
      <rect x="9.5" y="0" width="1" height="14" fill="currentColor" />
      <rect x="14" y="0" width="1" height="14" fill="currentColor" />
      <rect x="18" y="0" width="1" height="14" fill="currentColor" />
    </svg>
  ),
};

const GridSwitcher = ({
  availableOptions,
  columns,
  onChange,
  hiddenOptions = [],
}: GridSwitcherProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.gridSwitcher}>
      {availableOptions.map(num => {
        const isHidden = hiddenOptions.includes(num);
        const isActive = columns === num;

        const btnClasses = [
          styles.gridBtn,
          isActive ? styles.active : '',
          isHidden ? styles.hidden : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={num}
            type="button"
            onClick={() => !isHidden && onChange(num)}
            className={btnClasses}
            disabled={isHidden}
            aria-label={t('common.gridSwitcher.switchTo', { count: columns })}
          >
            <div className={styles.iconWrapper}>{GRIDICONS[num]}</div>
          </button>
        );
      })}
    </div>
  );
};
export default GridSwitcher;

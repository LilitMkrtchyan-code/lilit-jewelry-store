import { useTranslation } from 'react-i18next';
import type { CloseButtonProps } from './types';
import styles from './styles.module.css';

const CloseButton = ({ onClick, className = '' }: CloseButtonProps) => {
  const { t } = useTranslation();
  const label = t('common.closeButton');

  return (
    <button className={`${styles.closeButton} ${className}`} onClick={onClick} aria-label={label}>
      <span className={styles.icon}>&times;</span>
    </button>
  );
};
export default CloseButton;

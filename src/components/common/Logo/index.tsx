import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { LogoProps } from './types';
import styles from './styles.module.css';

const Logo = ({ className = '', onClose }: LogoProps) => {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      onClick={onClose}
      className={`${styles.logo} ${className}`}
      aria-label={t('header.ariaLabels.logo')}
    >
      <div className={styles.row}>KASS</div>
      <div className={styles.rowMid}>
        <span className={styles.inverted}>A</span>
        <span className={styles.normal}>M</span>
        <span className={styles.inverted}>A</span>
      </div>
      <div className={styles.row}>N</div>
    </Link>
  );
};

export default Logo;

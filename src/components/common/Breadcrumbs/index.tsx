import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { BreadcrumbsProps } from './types';
import styles from './styles.module.css';

const Breadcrumbs = ({ className = '' }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const pathnames = pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumbs} ${className}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={`${styles.link} line-flow`}>
            {t('nav.home')}
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className={styles.item}>
              <span className={styles.separator}>/</span>
              {isLast ? (
                <span className={styles.current}>{t(`nav.${name}`, { defaultValue: name })}</span>
              ) : (
                <Link to={routeTo} className={`${styles.link} line-flow`}>
                  {t(`nav.${name}`, { defaultValue: name })}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Breadcrumbs;

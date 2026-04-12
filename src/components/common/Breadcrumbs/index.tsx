import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { BreadcrumbsProps } from './types';
import styles from './styles.module.css';

const Breadcrumbs = ({ className = '', productName }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const pathnames = pathname.split('/').filter(Boolean);

  const filteredPathnames = pathnames.filter((_, index) => {
    const nextSegment = pathnames[index + 1];
    return !nextSegment || isNaN(Number(nextSegment));
  });

  if (filteredPathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`${styles.breadcrumbs} ${className}`}>
      <div className="container">
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/" className={`${styles.link} line-flow`}>
              {t('nav.home')}
            </Link>
          </li>

          {filteredPathnames.map((name, index) => {
            const originalIndex = pathnames.indexOf(name);
            const routeTo = `/${pathnames.slice(0, originalIndex + 1).join('/')}`;
            const isLast = index === filteredPathnames.length - 1;

            return (
              <li key={routeTo} className={styles.item}>
                <span className={styles.separator}>/</span>
                {isLast ? (
                  <span className={styles.current}>
                    {productName
                      ? t(`products.${productName}.name`)
                      : t(`nav.${name}`, { defaultValue: name })}
                  </span>
                ) : (
                  <Link to={routeTo} className={`${styles.link} line-flow`}>
                    {t(`nav.${name}`, { defaultValue: name })}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Breadcrumbs;

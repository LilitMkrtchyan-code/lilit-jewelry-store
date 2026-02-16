import { useTranslation } from 'react-i18next';
import type { MainNavigationProps } from './type';
import { HEADER_MAIN_NAVIGATION } from './const';
import { Collapse } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const MainNavigation = ({ onClose }: MainNavigationProps) => {
  const { t } = useTranslation();

  const items = HEADER_MAIN_NAVIGATION.map(item => {
    if (item.children && item.children.length > 0) {
      return {
        key: item.id,
        label: <span className={styles.mainTitle}>{t(item.titleKey)}</span>,
        children: (
          <ul className={styles.subList}>
            {item.children.map(child => (
              <li key={child.id} className={styles.subItem}>
                <NavLink
                  to={`/${item.slug}/${child.slug}`}
                  className={({ isActive }) =>
                    isActive ? `${styles.subLink} ${styles.activeLink}` : styles.subLink
                  }
                  onClick={onClose}
                >
                  {t(child.titleKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        ),
      };
    }
    return null;
  }).filter(item => item !== null);

  return (
    <div className={styles.mainNavigation}>
      <Collapse
        items={items}
        ghost
        expandIconPlacement="end"
        className={styles.mainAccordion}
      ></Collapse>
    </div>
  );
};

export default MainNavigation;

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { MainNavigationProps } from './type';
import { HEADER_MAIN_NAVIGATION } from './const';
import { NavLink } from 'react-router-dom';
import BaseCollapse from '../../../../common/BaseCollapse';
import styles from './styles.module.css';

const MainNavigation = ({ onClose, isOpen }: MainNavigationProps) => {
  const { t } = useTranslation();

  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setActiveKeys([]);
    }
  }, [isOpen]);

  const handleChange = useCallback((keys: string | string[]) => {
    setActiveKeys(Array.isArray(keys) ? keys : [keys]);
  }, []);

  const items = useMemo(() => {
    return HEADER_MAIN_NAVIGATION.filter(item => item.children?.length).map(item => ({
      key: item.id,
      label: <span className={`${styles.mainTitle} line-flow`}>{t(item.titleKey)}</span>,
      children: (
        <ul className={styles.subList}>
          {item.children?.map(child => (
            <li key={child.id} className={styles.subItem}>
              <NavLink
                to={`/${item.slug}/${child.slug}`}
                className={({ isActive }) =>
                  `${styles.subLink}  ${isActive ? 'line-disappear' : 'line-flow'}`
                }
                onClick={onClose}
              >
                {t(child.titleKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      ),
    }));
  }, [t, onClose]);

  return (
    <div className={styles.mainNavigation}>
      <BaseCollapse
        items={items}
        className={styles.mainAccordion}
        activeKey={activeKeys}
        onChange={handleChange}
      />
    </div>
  );
};

export default MainNavigation;

import { useTranslation } from 'react-i18next';
import { FOOTER_COLUMNS } from '../../const';
import { NavLink } from 'react-router-dom';
import BaseCollapse from '../../../../common/BaseCollapse';
import styles from './styles.module.css';

const FooterMobile = () => {
  const { t } = useTranslation();

  const accordionItems = FOOTER_COLUMNS.filter(column => column.links).map(column => ({
    key: column.key,
    label: t(column.label),
    children: (
      <ul className={styles.mobileLinkList}>
        {column.links?.map(link => (
          <li key={link.labelKey} className={styles.subItem}>
            <NavLink to={link.to} className={`${styles.subLink} line-flow`}>
              {t(link.labelKey)}
            </NavLink>
          </li>
        ))}
      </ul>
    ),
  }));
  return (
    <div className={styles.footerMobile}>
      <BaseCollapse items={accordionItems} accordion className={styles.mobileCollapse} />
    </div>
  );
};
export default FooterMobile;

import { useToggle } from '../../../hooks/useToggle';
import { useTranslation } from 'react-i18next';
import LabelIcon from '../../common/icons/LabelIcon';
import BadgeIcon from '../../common/icons/BadgeIcon';
import Logo from '../../common/Logo';
import { ClipboardClock, Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import NavigationDrawer from './components/NavigationDrawer';
import styles from './styles.module.css';

const Header = () => {
  const { isVisible, hide, show } = useToggle();
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.topBar}>
          <div className={styles.topLeft}>
            <LabelIcon
              icon={<Menu size={20} strokeWidth={1} />}
              text={t('header.iconsText.menu')}
              onClick={show}
              as="button"
              ariaLabel={t('header.ariaLabels.menu')}
              hideTextMobile={true}
              textClassName={styles.menuText}
            />
            <LabelIcon
              icon={<Search size={20} strokeWidth={1} />}
              text={t('header.iconsText.search')}
              as="button"
              ariaLabel={t('header.ariaLabels.search')}
              hideTextMobile={true}
              textClassName={styles.searchText}
            />
            <NavigationDrawer open={isVisible} onClose={hide} />
          </div>
          <div className={styles.topCenter}>
            <Logo />
          </div>
          <div className={styles.topRight}>
            <LabelIcon
              icon={<UserRound size={20} strokeWidth={1} />}
              as="navlink"
              to="/account"
              className={styles.userIcon}
              ariaLabel={t('header.ariaLabels.account')}
            />
            <BadgeIcon
              icon={<ClipboardClock size={20} strokeWidth={1} />}
              as="navlink"
              to="/booking"
              ariaLabel={t('header.ariaLabels.bookingCart')}
            />
            <BadgeIcon
              icon={<ShoppingBag size={20} strokeWidth={1} />}
              ariaLabel={t('header.ariaLabels.cart')}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

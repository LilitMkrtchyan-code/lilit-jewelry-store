import { useTranslation } from 'react-i18next';
import type { ServiceNavigationProps } from './types';
import { HEADER_SERVICE_NAVIGATION } from './const';
import LabelIcon from '../../../../common/icons/LabelIcon';
import { Earth, HandPlatter, Headset, MapPin, UserRound } from 'lucide-react';
import styles from './styles.module.css';

const ICON_COMPONENTS: Record<string, React.ReactNode> = {
  account: <UserRound size={20} strokeWidth={1} />,
  contact: <Headset size={20} strokeWidth={1} />,
  services: <HandPlatter size={20} strokeWidth={1} />,
  storeLocator: <MapPin size={20} strokeWidth={1} />,
  language: <Earth size={20} strokeWidth={1} />,
};

const ServiceNavigation = ({ onClose, onOpenLang }: ServiceNavigationProps) => {
  const { t } = useTranslation();

  const handleLanguageClick = () => {
    onClose();
    onOpenLang();
  };

  return (
    <div className={styles.serviceNavigation}>
      <ul className={styles.serviceList}>
        {HEADER_SERVICE_NAVIGATION.map(item => {
          const common = {
            icon: ICON_COMPONENTS[item.iconKey],
            text: t(item.titleKey),
            onClick: item.iconKey === 'language' ? handleLanguageClick : onClose,
            className: styles.serviceLink,
            ariaLabel: t(`header.ariaLabels.${item.iconKey}`),
          };
          return (
            <li key={item.id} className={styles.serviceItem}>
              {item.slug ? (
                <LabelIcon {...common} as="navlink" to={`/${item.slug}`} />
              ) : (
                <LabelIcon {...common} as="button" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ServiceNavigation;

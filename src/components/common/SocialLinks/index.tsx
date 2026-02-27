import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import type { SocialLinksProps } from './types';
import type { SocialIconKey } from '../../layout/Footer/types';
import styles from './styles.module.css';

const socialIcons: Record<SocialIconKey, JSX.Element> = {
  instagram: <FontAwesomeIcon icon={faInstagram} />,
  facebook: <FontAwesomeIcon icon={faFacebookF} />,
};

const SocialLinks = ({ socials }: SocialLinksProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.socialLinks}>
      {socials?.map(link => (
        <a
          key={link.iconKey}
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={t(`header.ariaLabels.${link.iconKey}`)}
        >
          {socialIcons[link.iconKey]}
        </a>
      ))}
    </div>
  );
};
export default SocialLinks;

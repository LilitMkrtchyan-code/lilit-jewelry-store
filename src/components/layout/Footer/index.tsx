import { Trans, useTranslation } from 'react-i18next';
import { useToggle } from '../../../hooks/useToggle';
import { getCurrentYear } from './utils';
import FooterDesktop from './components/FooterDesktop';
import FooterMobile from './components/FooterMobile';
import BaseButton from '../../common/buttons/BaseButton';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import styles from './styles.module.css';

const Footer = () => {
  const { t } = useTranslation();
  const { isVisible, show, hide } = useToggle();

  const currentYear = getCurrentYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <FooterMobile />
          <FooterDesktop />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerLegal}>
            <div className={styles.copyright}>
              <Trans
                i18nKey="footer.copyright"
                values={{ year: currentYear }}
                components={{
                  year: <span className={styles.year} />,
                }}
              />
            </div>
            <BaseButton onClick={show}>{t('footer.cta')}</BaseButton>
          </div>
        </div>
      </div>
      <LanguageSwitcher open={isVisible} onCancel={hide} />
    </footer>
  );
};

export default Footer;

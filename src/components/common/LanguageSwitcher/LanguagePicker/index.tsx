import { useTranslation } from 'react-i18next';
import { LANGUAGES } from './const';
import type { LanguagePickerProps } from './types';
import necklace6 from '../../../../assets/img/necklaces/necklace6.jpg';
import AppTitle from '../../AppTitle';
import styles from './styles.module.css';

const LanguagePicker = ({ currentLang, onSelect }: LanguagePickerProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.languagePicker}>
      <div className={styles.imageSection}>
        <img src={necklace6} className={styles.image} alt={t('modals.language.altText')} />
      </div>
      <div className={styles.contentSection}>
        <AppTitle variant="sectionTitle" className={styles.title}>
          {t('modals.language.title')}
        </AppTitle>
        <div className={styles.langList}>
          {LANGUAGES.map(lang => (
            <button
              key={lang.key}
              className={`${styles.langItem} ${currentLang === lang.key ? styles.active : ''} `}
              onClick={() => onSelect(lang.key)}
            >
              <span className={styles.langName}>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LanguagePicker;

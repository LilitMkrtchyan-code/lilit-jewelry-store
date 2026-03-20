import { useTranslation } from 'react-i18next';
import type { ShowMoreProps } from './types';
import BaseButton from '../buttons/BaseButton';
import Loader from '../Loader';
import styles from './styles.module.css';

const ShowMore = ({ isLoading, onClick, hasMore, currentCount, totalCount }: ShowMoreProps) => {
  const { t } = useTranslation();

  if (!hasMore) return null;

  return (
    <div className={styles.showMore}>
      <div className={`${styles.loaderBox} ${isLoading ? styles.visible : ''}`}>
        <Loader />
      </div>
      <BaseButton
        variant="dark"
        onClick={onClick}
        disabled={isLoading}
        className={styles.showMoreBtn}
      >
        <span className={styles.btnText}>{t('common.showMore')}</span>
        <span className={styles.counter}>
          ({currentCount} / {totalCount})
        </span>
      </BaseButton>
    </div>
  );
};
export default ShowMore;

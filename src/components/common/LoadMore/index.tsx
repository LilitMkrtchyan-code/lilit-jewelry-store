import { useTranslation } from 'react-i18next';
import type { ShowMoreProps } from './types';
import BaseButton from '../buttons/BaseButton';
import Loader from '../Loader';
import styles from './styles.module.css';

const LoadMore = ({ isLoading, onClick, hasMore, currentCount, totalCount }: ShowMoreProps) => {
  const { t } = useTranslation();

  if (!hasMore) return null;

  return (
    <div className={styles.loadMore}>
      <div className={`${styles.loaderBox} ${isLoading ? styles.visible : ''}`}>
        <Loader />
      </div>
      <div className={styles.actions}>
        <span className={styles.itemsCounter}>
          {t('catalog.showingItems', { currentCount, totalCount })}
        </span>
        <BaseButton
          variant="dark"
          onClick={onClick}
          disabled={isLoading}
          className={styles.loadMoreBtn}
        >
          {t('common.loadMore')}
        </BaseButton>
      </div>
    </div>
  );
};
export default LoadMore;

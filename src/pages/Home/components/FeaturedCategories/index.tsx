import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCategories } from '../../../../hooks/useCategories';
import VisualCard from '../../../../components/common/cards/VisualCard';
import AppTitle from '../../../../components/common/AppTitle';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';
import styles from './styles.module.css';

const FeaturedCategories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: categories, isLoading, isError } = useCategories();

  return (
    <section className={styles.categories}>
      <div className="container">
        {isError ? (
          <ErrorMessage message={t('errors.default')} />
        ) : isLoading ? (
          <div className="loading">Loading Categories...</div>
        ) : (
          <div className={styles.categoryList}>
            {categories?.map(category => (
              <VisualCard
                key={category.id}
                width={300}
                image={{ src: category.image, alt: category.slug }}
                hoverEffect={true}
                contentClassName={styles.categoryContent}
                onClick={() => navigate(`/catalog/${category.slug}`)}
              >
                <AppTitle variant="cardTitle" inline={true} className={styles.cardTitle}>
                  {t(`categories.${category.slug}`)}
                </AppTitle>
              </VisualCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default FeaturedCategories;

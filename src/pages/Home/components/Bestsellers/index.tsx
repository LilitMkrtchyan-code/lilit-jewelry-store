import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBestsellers } from '../../../../hooks/useBestsellers';
import AppTitle from '../../../../components/common/AppTitle';
import { T_PATH } from './const';
import ProductCarousel from '../../../../components/product/ProductCarousel';
import styles from './styles.module.css';

const Bestsellers = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, isLoading, isError } = useBestsellers();
  const products = data?.data ?? [];

  return (
    <section className={styles.bestsellers}>
      <div className="container">
        <AppTitle as={'h2'} variant={'sectionTitle'} className={styles.title}>
          {t(`${T_PATH}.title`)}
        </AppTitle>
        <ProductCarousel
          products={products}
          isLoading={isLoading}
          isError={isError}
          onClickProduct={product => navigate(`/product/${product.id}`)}
          onClickBook={() => navigate(`/booking`)}
        />
      </div>
    </section>
  );
};

export default Bestsellers;

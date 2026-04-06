import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSimilarProducts } from '../../../hooks/useSimilarProducts';
import type { SimilarProductsProps } from './types';
import AppTitle from '../../common/AppTitle';
import ProductCarousel from '../ProductCarousel';
import styles from './styles.module.css';

const SimilarProducts = ({ product }: SimilarProductsProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, isLoading, isError } = useSimilarProducts(product);
  const products = data?.data;

  if (!products?.length) return null;

  return (
    <section className={styles.similarProducts}>
      <AppTitle as="h2" variant="sectionTitle">
        {t('product.similarProducts.title')}
      </AppTitle>
      <ProductCarousel
        products={products}
        isLoading={isLoading}
        isError={isError}
        onClickProduct={product => navigate(`/product/${product.id}`)}
        onClickBook={() => navigate('/booking')}
      />
    </section>
  );
};
export default SimilarProducts;

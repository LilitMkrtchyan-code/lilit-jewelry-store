import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProducts } from '../../../../hooks/useProducts';
import { T_PATH } from './const';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../../../../components/common/cards/ProductCard';
import Carousel from '../../../../components/common/Carousel';
import AppTitle from '../../../../components/common/AppTitle';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';
import styles from './styles.module.css';

const Bestsellers = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: productList, isLoading, isError } = useProducts();
  const products = productList?.pages.flatMap(page => page.data) ?? [];

  return (
    <section className={styles.bestsellers}>
      <AppTitle as={'h2'} variant={'sectionTitle'} className={styles.title}>
        {t(`${T_PATH}.title`)}
      </AppTitle>
      {isError ? (
        <ErrorMessage message={t('errors.default')} />
      ) : isLoading ? (
        <div className="loading">Loading Bestsellers...</div>
      ) : (
        <Carousel>
          {products?.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                width={340}
                onClickProduct={() => navigate(`/product/${product.id}`)}
                onClickBook={() => navigate(`/booking`)}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default Bestsellers;

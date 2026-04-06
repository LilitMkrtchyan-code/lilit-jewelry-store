import type { ProductCarouselProps } from './types';
import { ErrorMessage } from '../../common/ErrorMessage';
import Carousel from '../../common/Carousel';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../../common/cards/ProductCard';

const ProductCarousel = ({
  products,
  width,
  message,
  onClickProduct,
  onClickBook,
  isLoading,
  isError,
  className = '',
}: ProductCarouselProps) => {
  return (
    <div className={className}>
      {isError ? (
        <ErrorMessage message={message} />
      ) : isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <Carousel>
          {products?.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                width={width ?? 340}
                onClickProduct={() => onClickProduct(product)}
                onClickBook={onClickBook}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductCarousel;

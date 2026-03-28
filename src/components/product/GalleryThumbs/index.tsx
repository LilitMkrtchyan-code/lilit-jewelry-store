import type { GalleryThumbsProps } from './types';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductThumb from '../ProductThumb';
import { FreeMode, Thumbs } from 'swiper/modules';
import styles from './styles.module.css';

const GalleryThumbs = ({ images, onSetThumbs }: GalleryThumbsProps) => {
  return (
    <Swiper
      onSwiper={onSetThumbs}
      direction="vertical"
      spaceBetween={10}
      slidesPerView={'auto'}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Thumbs]}
      className={styles.myThumbs}
    >
      {images.map((img, index) => (
        <SwiperSlide key={`thumbs-${index}`}>
          <ProductThumb src={img} index={index + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default GalleryThumbs;

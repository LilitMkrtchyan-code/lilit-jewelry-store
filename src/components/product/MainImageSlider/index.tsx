import { useTranslation } from 'react-i18next';
import type { MainImageSliderProps } from './types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Thumbs, Zoom } from 'swiper/modules';
import styles from './styles.module.css';

const MainImageSlider = ({
  images,
  thumbs,
  onSlideClick,
  onSlideChange,
  initialSlide = 0,
  enableZoom = false,
  speed,
  className = '',
}: MainImageSliderProps) => {
  const { t } = useTranslation();

  const galleryKey = 'product.productDetails.gallery';
  const altLabel = t(`${galleryKey}.altText`);

  return (
    <Swiper
      effect={enableZoom ? undefined : 'fade'}
      fadeEffect={enableZoom ? undefined : { crossFade: true }}
      navigation={true}
      initialSlide={initialSlide}
      zoom={enableZoom ? { maxRatio: 2 } : false}
      thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
      modules={[Navigation, Thumbs, EffectFade, Zoom]}
      speed={speed}
      className={`${styles.mainSwiper} ${className}`}
      onSlideChange={swiper => onSlideChange?.(swiper.activeIndex)}
    >
      {images.map((img, index) => (
        <SwiperSlide key={`main-${index}`} className={styles.mainSlide} onClick={onSlideClick}>
          <div className={enableZoom ? 'swiper-zoom-container' : undefined}>
            <img src={img} alt={`${altLabel} ${index + 1}`} className={styles.mainImage} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MainImageSlider;

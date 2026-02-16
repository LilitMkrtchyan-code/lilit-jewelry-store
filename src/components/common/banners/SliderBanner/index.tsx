import { useState } from 'react';
import { Carousel, Grid } from 'antd';
import type { SliderBannerProps } from './types';
import { AUTOPLAY_SPEED, BANNER_IMAGES, CAROUSEL_EFFECT, CAROUSEL_SPEED } from './const';
import BaseBanner from '../BaseBanner';

const SliderBanner = ({ banners }: SliderBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Carousel
      autoplay={!isMobile}
      autoplaySpeed={AUTOPLAY_SPEED}
      speed={CAROUSEL_SPEED}
      effect={CAROUSEL_EFFECT}
      afterChange={current => setCurrentSlide(current)}
    >
      {banners.map((banner, index) => (
        <BaseBanner
          key={banner.id}
          {...banner}
          image={{ src: BANNER_IMAGES[banner.image], alt: banner.alt }}
          isActive={currentSlide === index}
        />
      ))}
    </Carousel>
  );
};

export default SliderBanner;

import type { SwiperClass } from 'swiper/react';

export type MainImageSliderProps = {
  images: string[];
  thumbs?: SwiperClass | null;
  onSlideClick?: () => void;
  onSlideChange?: (index: number) => void;
  initialSlide?: number;
  enableZoom?: boolean;
  speed?: number;
  className?: string;
};

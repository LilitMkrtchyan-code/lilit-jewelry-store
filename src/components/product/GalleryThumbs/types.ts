import type { SwiperClass } from 'swiper/react';

export type GalleryThumbsProps = {
  images: string[];
  onSetThumbs: (thumb: SwiperClass | null) => void;
};

import type { BANNER_IMAGES } from './const';
import type { BannerButton } from '../types';
import type { ReactNode } from 'react';

export type BannerImageKey = keyof typeof BANNER_IMAGES;

export type SliderBannerItem = {
  id: string;
  image: {
    src: BannerImageKey;
    alt: string;
  };
  title?: ReactNode;
  subtitle?: ReactNode;
  cta?: BannerButton[];
};

export type SliderBannerProps = {
  banners: SliderBannerItem[];
};

import type { BannerCTA } from '../types';

export type BaseBannerProps = {
  id: string;
  image: {
    src: string;
    alt?: string;
  };
  title?: string;
  subtitle?: string;
  cta?: BannerCTA;
  className?: string;
  isActive?: boolean;
};

import type { ReactNode } from 'react';
import type { BannerButton } from '../types';

export type BaseBannerProps = {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title?: ReactNode;
  subtitle?: ReactNode;
  cta?: BannerButton[];
  className?: string;
  animate?: boolean;
};

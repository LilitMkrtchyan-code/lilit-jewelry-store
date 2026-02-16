import type { ReactNode } from 'react';

export type BaseCardProps = {
  image?: {
    src: string;
    alt?: string;
  };
  children: ReactNode;
  imageNode?: ReactNode;
  width?: string | number;
  height?: string | number;
  onImageClick?: () => void;
  className?: string;
  imageClassName?: string;
};

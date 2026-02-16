import { useState } from 'react';
import type { VisualCardProps } from './types';
import BaseCard from '../BaseCard';
import styles from './styles.module.css';

const VisualCard = ({
  image,
  children,
  onClick,
  hoverEffect = false,
  width,
  height,
  className = '',
  contentClassName = '',
  imgClassName = '',
}: VisualCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageClasses = [imgClassName, styles.image, hoverEffect && isHovered ? styles.zoomed : '']
    .filter(Boolean)
    .join(' ');

  return (
    <BaseCard
      image={image}
      width={width}
      height={height}
      className={`${className}`}
      onImageClick={onClick}
      imageClassName={imageClasses}
    >
      <div className={`${styles.contentWrapper} ${contentClassName}`}>
        <div
          onMouseEnter={() => hoverEffect && setIsHovered(true)}
          onMouseLeave={() => hoverEffect && setIsHovered(false)}
          onClick={onClick}
          className={`${hoverEffect && 'line-flow'}`}
        >
          {children}
        </div>
      </div>
    </BaseCard>
  );
};

export default VisualCard;

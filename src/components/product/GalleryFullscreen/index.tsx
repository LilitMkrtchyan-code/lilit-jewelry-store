import { useEffect } from 'react';
import type { GalleryFullscreenProps } from './types';
import MainImageSlider from '../MainImageSlider';
import CloseButton from '../../common/buttons/CloseButton';
import styles from './styles.module.css';

const GalleryFullscreen = ({ images, initialSlide, onClose }: GalleryFullscreenProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.fullscreenOverlay}>
      <CloseButton onClick={onClose} className={styles.closeBtn} />
      <div className={styles.sliderContainer}>
        <MainImageSlider
          images={images}
          initialSlide={initialSlide}
          enableZoom={true}
          className={styles.fullscreenSlider}
          speed={600}
        />
      </div>
    </div>
  );
};
export default GalleryFullscreen;

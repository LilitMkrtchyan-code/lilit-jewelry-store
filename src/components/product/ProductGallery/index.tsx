import { useEffect, useRef, useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import type { ProductGalleryProps } from './types';
import type { SwiperClass } from 'swiper/react';
import GalleryThumbs from '../GalleryThumbs';
import MainImageSlider from '../MainImageSlider';
import GalleryFullscreen from '../GalleryFullscreen';
import styles from './styles.module.css';

const ProductGallery = ({ mainImage, galleryImages }: ProductGalleryProps) => {
  const [thumbs, setThumbs] = useState<SwiperClass | null>(null);
  const [initialSlide, setInitialSlide] = useState(0);
  const { isVisible: isZoomOpen, show: openZoom, hide: closeZoom } = useToggle();

  const mainSliderRef = useRef<HTMLDivElement>(null);
  const [sliderHeight, setSliderHeight] = useState<number>(0);

  const allImages = [mainImage, ...(galleryImages || [])];

  useEffect(() => {
    if (!mainSliderRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setSliderHeight(entry.contentRect.height);
    });
    observer.observe(mainSliderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.productGallery}>
        <div className={styles.thumbsColumn} style={{ height: sliderHeight }}>
          <GalleryThumbs images={allImages} onSetThumbs={setThumbs} />
        </div>
        <div className={styles.mainSliderColumn} ref={mainSliderRef}>
          <MainImageSlider
            images={allImages}
            thumbs={thumbs}
            onSlideClick={openZoom}
            onSlideChange={setInitialSlide}
          />
        </div>
      </div>
      {isZoomOpen && (
        <GalleryFullscreen onClose={closeZoom} images={allImages} initialSlide={initialSlide} />
      )}
    </>
  );
};

export default ProductGallery;

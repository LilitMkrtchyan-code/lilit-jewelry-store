import { useNavigate } from 'react-router-dom';
import type { BaseBannerProps } from './types';
import AppTitle from '../../AppTitle';
import BaseButton from '../../buttons/BaseButton';
import styles from './styles.module.css';

const BaseBanner = ({ image, title, subtitle, cta, className = '', isActive }: BaseBannerProps) => {
  const navigate = useNavigate();

  const animationClass = isActive ? 'animate-reveal' : '';
  const altText = image?.alt || title || 'Banner';

  return (
    <section className={`${styles.banner} ${className}`}>
      <div className={styles.bannerContent}>
        <img src={image.src} alt={altText} className={styles.image} loading="eager" />
        <div className={`${styles.textContainer} ${animationClass}`}>
          {title && (
            <AppTitle variant="pageTitle" className={styles.title}>
              {title}
            </AppTitle>
          )}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {cta && (
            <div className={styles.buttons}>
              {cta.book && (
                <BaseButton
                  label={cta.book}
                  className={styles.buttonBook}
                  variant="shadow"
                  onClick={() => navigate('/booking')}
                />
              )}
              {cta.shop && (
                <BaseButton
                  label={cta.shop}
                  className={styles.buttonShop}
                  variant="shadow"
                  onClick={() => navigate('/catalog')}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default BaseBanner;

import { useNavigate } from 'react-router-dom';
import type { BaseBannerProps } from './types';
import BaseButton from '../../buttons/BaseButton';
import styles from './styles.module.css';

const BaseBanner = ({
  image,
  title,
  subtitle,
  cta = [],
  className = '',
  animate,
}: BaseBannerProps) => {
  const navigate = useNavigate();

  return (
    <section className={`${styles.banner} ${className}`}>
      <div className={styles.bannerContent}>
        <img src={image.src} alt={image.alt} className={styles.image} loading="eager" />
        <div className={`${styles.textContainer} ${animate ? 'animate-reveal' : ''}`}>
          {title}
          {subtitle}
          {cta.length > 0 && (
            <div className={styles.buttons}>
              {cta.map(button => (
                <BaseButton
                  key={button.id}
                  variant={button.variant || 'shadow'}
                  className={styles.bannerButton}
                  onClick={() => navigate(button.link)}
                >
                  {button.label}
                </BaseButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default BaseBanner;

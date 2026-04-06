import { useTranslation } from 'react-i18next';
import type { ProductThumbProps } from './types';
import styles from './styles.module.css';

const ProductThumb = ({ src, index }: ProductThumbProps) => {
  const { t } = useTranslation();
  const altLabel = t('product.productDetails.gallery.altText');

  return (
    <div className={styles.thumbSlide}>
      <img src={src} alt={`${altLabel} ${index}`} className={styles.thumbImage} />
    </div>
  );
};
export default ProductThumb;

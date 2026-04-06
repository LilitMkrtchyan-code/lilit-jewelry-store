import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import type { ProductSummaryProps } from './types';
import AppTitle from '../../common/AppTitle';
import BaseButton from '../../common/buttons/BaseButton';
import LabelIcon from '../../common/icons/LabelIcon';
import { Heart } from 'lucide-react';
import styles from './styles.module.css';

const ProductSummary = ({ product }: ProductSummaryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const productKey = `products.${product.nameKey}`;
  const materials = t(`${productKey}.materials`, { returnObjects: true }) as string[];
  const stones = t(`${productKey}.stones`, { returnObjects: true }) as string[];

  const allMaterials = [
    ...(Array.isArray(materials) && materials.length > 0 ? materials : []),
    ...(Array.isArray(stones) && stones.length > 0 ? stones : []),
  ];

  return (
    <div className={styles.productSummary}>
      <AppTitle as={'h2'} variant="sectionTitle" className={styles.title}>
        {t(`${productKey}.name`)}
      </AppTitle>
      <div className={styles.descriptionBox}>
        <p className={`${styles.description} ${!isExpanded ? styles.truncated : ''}`}>
          {t(`${productKey}.description`)}
        </p>
        {!isExpanded && (
          <BaseButton className={styles.moreBtn} variant="link" onClick={() => setIsExpanded(true)}>
            {t('common.readMore')}
          </BaseButton>
        )}
      </div>

      {allMaterials.length > 0 && <p className={styles.materials}>{allMaterials.join(', ')}</p>}
      <div className={styles.priceRow}>
        <span className={styles.price}>
          {product.price} {product.currency}
        </span>
        <span className={styles.stockBadge}>
          {product.inStock ? t('common.inStock') : t('common.outOfStock')}
        </span>
      </div>

      <div className={styles.actions}>
        <div className={styles.mainRow}>
          <BaseButton
            variant="dark"
            onClick={() => {}}
            className={styles.cartBtn}
            aria-label={t('common.addToBag')}
          >
            {t('common.addToBag')}
          </BaseButton>
          <LabelIcon
            icon={<Heart size={24} strokeWidth={1} />}
            ariaLabel={t('common.addToFavorites')}
            className={styles.favoritesBtn}
          />
        </div>
        <BaseButton
          variant="dark"
          onClick={() => navigate('/booking')}
          className={styles.bookBtn}
          aria-label={t('common.bookAppointment')}
        >
          {t('common.bookAppointment')}
        </BaseButton>
      </div>
    </div>
  );
};

export default ProductSummary;

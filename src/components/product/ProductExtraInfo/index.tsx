import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ProductExtraInfoProps, ActiveSection } from './types';
import { EXTRA_INFO_SECTIONS } from './const';
import InfoRow from '../../common/InfoRow';
import BaseDrawer from '../../common/BaseDrawer';
import styles from './styles.module.css';

const ProductExtraInfo = ({ product }: ProductExtraInfoProps) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<ActiveSection>(null);

  const activeItem = EXTRA_INFO_SECTIONS.find(s => s.key === activeSection);

  return (
    <div className={styles.productExtraInfo}>
      {EXTRA_INFO_SECTIONS.map(section => (
        <InfoRow
          key={section.key}
          label={t(section.labelKey)}
          onClick={() => setActiveSection(section.key)}
        />
      ))}

      <BaseDrawer
        open={!!activeSection}
        onClose={() => setActiveSection(null)}
        title={activeItem ? t(activeItem.labelKey) : ''}
        side="right"
        className={styles.extraInfoDrawer}
      >
        {activeItem && (
          <div className={styles.drawerContent}>{t(activeItem.getContentKey(product.nameKey))}</div>
        )}
      </BaseDrawer>
    </div>
  );
};

export default ProductExtraInfo;

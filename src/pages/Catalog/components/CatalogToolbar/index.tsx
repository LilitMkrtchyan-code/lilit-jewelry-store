import { Trans, useTranslation } from 'react-i18next';
import { SlidersHorizontal } from 'lucide-react';
import LabelIcon from '../../../../components/common/icons/LabelIcon';
import type { CatalogToolbarProps } from './types';
import GridSwitcher from '../../../../components/common/GridSwitcher';
import styles from './styles.module.css';

const CatalogToolbar = ({
  isFiltersOpen,
  columns,
  totalItems,
  onToggleFilters,
  onChangeColumns,
  availableOptions,
  hiddenOptions,
}: CatalogToolbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.catalogToolbar}>
      <div className={styles.filterControls}>
        <LabelIcon
          icon={<SlidersHorizontal size={20} strokeWidth={1} />}
          text={isFiltersOpen ? t('catalog.toolbar.hideFilters') : t('catalog.toolbar.showFilters')}
          onClick={onToggleFilters}
          className={styles.filterBtn}
          textClassName={styles.filterText}
        />
        <div className={styles.itemsCount}>
          <Trans
            i18nKey="catalog.toolbar.totalItems"
            count={totalItems}
            values={{ count: totalItems }}
            components={{
              num: <span className={styles.countNumber} />,
            }}
          />
        </div>
      </div>
      <div className={styles.viewOptions}>
        <GridSwitcher
          availableOptions={availableOptions}
          columns={columns}
          onChange={onChangeColumns}
          hiddenOptions={hiddenOptions}
        />
      </div>
    </div>
  );
};
export default CatalogToolbar;

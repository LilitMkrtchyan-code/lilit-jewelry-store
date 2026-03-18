import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import { useToggle } from '../../../../hooks/useToggle';
import { useProducts } from '../../../../hooks/useProducts';
import { useCatalogLayout } from '../../../../hooks/useCatalogLayout';
import CatalogToolbar from '../CatalogToolbar';
import FilterPanel from '../FilterPanel';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';
import BaseDrawer from '../../../../components/common/BaseDrawer';
import ProductGridSection from '../ProductGridSection';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const CatalogContent = () => {
  const { t } = useTranslation();

  const {
    data: productList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useProducts();

  const {
    isVisible: isFiltersOpen,
    show: showFilters,
    hide: closeFilters,
    toggle: toggleFilters,
  } = useToggle();

  const [preferredColumns, setPreferredColumns] = useState<number | null>(null);

  const { columns, availableOptions, hiddenOptions, isDesktop, isDrawerMode } = useCatalogLayout(
    isFiltersOpen,
    preferredColumns,
  );

  const products = useMemo(
    () => productList?.pages.flatMap(page => page.data) ?? [],
    [productList],
  );

  const currentCount = products.length;
  const total = productList?.pages[0]?.totalCount ?? 0;

  useEffect(() => {
    isDesktop ? showFilters() : closeFilters();
  }, [isDesktop]);

  const handleChangeColumns = (newColumns: number) => {
    setPreferredColumns(newColumns);
  };

  return (
    <div className={styles.catalogContent}>
      <CatalogToolbar
        isFiltersOpen={isFiltersOpen}
        availableOptions={availableOptions}
        hiddenOptions={hiddenOptions}
        onChangeColumns={handleChangeColumns}
        onToggleFilters={toggleFilters}
        totalItems={total}
        columns={columns}
      />
      <div className={styles.catalogMain}>
        {isDrawerMode ? (
          <BaseDrawer
            open={isFiltersOpen}
            onClose={closeFilters}
            title={t('catalog.toolbar.sortFilters')}
            closable={false}
          >
            <div className="customClose">
              <CloseOutlined onClick={closeFilters} />
            </div>
            <FilterPanel />
          </BaseDrawer>
        ) : (
          isFiltersOpen && (
            <aside className={styles.filterSidebar}>
              <FilterPanel />
            </aside>
          )
        )}
        {isError ? (
          <ErrorMessage />
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={isFiltersOpen ? styles.gridShrink : styles.gridFull}>
            <ProductGridSection
              columns={columns}
              currentCount={currentCount}
              totalCount={total}
              products={products}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              isLoading={isLoading}
              isError={isError}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogContent;

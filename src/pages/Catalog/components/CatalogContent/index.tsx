import { useTranslation } from 'react-i18next';
import { useCatalogFilters } from '../../../../hooks/useCatalogFilters';
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
  const { filters, setFilter } = useCatalogFilters();

  const {
    data: productList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useProducts({ limit: 12, ...filters });

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
      <div className="container">
        <div className={styles.catalogInner}>
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
                className={styles.filterDrawer}
              >
                <div className="customClose">
                  <CloseOutlined onClick={closeFilters} />
                </div>
                <FilterPanel filters={filters} setFilter={setFilter} />
              </BaseDrawer>
            ) : (
              isFiltersOpen && (
                <aside className={styles.filterSidebar}>
                  <FilterPanel filters={filters} setFilter={setFilter} />
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
      </div>
    </div>
  );
};

export default CatalogContent;

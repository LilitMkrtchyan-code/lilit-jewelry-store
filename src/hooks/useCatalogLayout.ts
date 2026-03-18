import { Grid } from 'antd';
import { useMemo } from 'react';
import {
  COLUMN_MAPPING,
  BREAKPOINT_WIDTHS,
} from '../pages/Catalog/components/CatalogContent/const';

const { useBreakpoint } = Grid;

export const useCatalogLayout = (isFiltersOpen: boolean, preferredColumns: number | null) => {
  const screens = useBreakpoint();

  const isDesktop = Boolean(screens.xl || screens.xxl);
  const isLG = Boolean(screens.lg && !screens.xl);
  const isMD = Boolean(screens.md && !screens.lg);
  const isMobile = Boolean(!screens.md);
  const isNarrowMobile = Boolean(
    !screens.sm && window.innerWidth <= BREAKPOINT_WIDTHS.NARROW_MOBILE,
  );

  const availableOptions = useMemo(() => {
    if (isDesktop) return COLUMN_MAPPING.DESKTOP;
    if (isLG) return COLUMN_MAPPING.TABLET_LG;
    if (isMD) return COLUMN_MAPPING.TABLET_MD;
    return COLUMN_MAPPING.MOBILE;
  }, [isDesktop, isLG, isMD]);

  const hiddenOptions = useMemo(() => {
    return isFiltersOpen && isDesktop ? [5] : [];
  }, [isDesktop, isFiltersOpen]);

  const columns = useMemo(() => {
    if (isNarrowMobile) return 1;
    if (
      preferredColumns &&
      availableOptions.includes(preferredColumns) &&
      !hiddenOptions.includes(preferredColumns)
    ) {
      return preferredColumns;
    }
    if (isDesktop) return isFiltersOpen ? 3 : 4;
    if (isLG) return 4;
    if (isMD) return 2;
    return 2;
  }, [
    preferredColumns,
    availableOptions,
    hiddenOptions,
    isFiltersOpen,
    isDesktop,
    isLG,
    isMD,
    isMobile,
    isNarrowMobile,
  ]);

  return {
    columns,
    availableOptions,
    hiddenOptions,
    isDesktop,
    isDrawerMode: isMobile || isMD || isLG,
  };
};

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import type { FilterPanelProps } from './types';
import { FILTER_SECTIONS } from './const';
import { Slider } from 'antd';
import FilterGroup from '../FilterGroup';
import BaseCollapse from '../../../../components/common/BaseCollapse';
import styles from './styles.module.css';

const FilterPanel = ({ filters, setFilter }: FilterPanelProps) => {
  const { t } = useTranslation();

  const [priceRange, setPriceRange] = useState<[number, number]>([
    filters.priceMin ?? 0,
    filters.priceMax ?? 10000,
  ]);

  const items = FILTER_SECTIONS.map(section => ({
    key: section.key,
    label: t(section.labelKey),
    children: (
      <>
        {section.type === 'range' ? (
          <Slider
            range
            min={0}
            max={10000}
            step={50}
            value={priceRange}
            onChange={val => setPriceRange(val as [number, number])}
            onChangeComplete={([min, max]) => {
              setFilter({ priceMin: String(min), priceMax: String(max) });
            }}
            tooltip={{
              formatter: value => `$${value?.toLocaleString()}`,
            }}
            className={styles.priceSlider}
          />
        ) : (
          <FilterGroup
            options={
              section.optionsKey
                ? (t(section.optionsKey, { returnObjects: true }) as Record<string, string>)
                : {}
            }
            type={section.type}
            name={section.key}
            activeValue={filters[section.key as keyof typeof filters] as string}
            onSelect={(key, value) => setFilter({ [key]: value })}
          />
        )}
      </>
    ),
  }));

  return (
    <div className={styles.filterPanel}>
      <BaseCollapse
        items={items}
        defaultActiveKey={['sort', 'category', 'collection', 'material', 'price']}
      />
    </div>
  );
};
export default FilterPanel;

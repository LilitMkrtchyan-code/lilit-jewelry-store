import { useTranslation } from 'react-i18next';
import { FILTER_SECTIONS } from './const';
import { Slider } from 'antd';
import FilterGroup from '../FilterGroup';
import BaseCollapse from '../../../../components/common/BaseCollapse';
import styles from './styles.module.css';

const FilterPanel = () => {
  const { t } = useTranslation();

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
            defaultValue={[0, 10000]}
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
          />
        )}
      </>
    ),
  }));

  return (
    <div className={styles.filterPanel}>
      <BaseCollapse items={items} defaultActiveKey={['sort', 'category', 'material', 'price']} />
    </div>
  );
};
export default FilterPanel;

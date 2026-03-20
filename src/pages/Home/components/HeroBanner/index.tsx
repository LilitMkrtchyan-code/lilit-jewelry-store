import { useTranslation } from 'react-i18next';
import type { SliderBannerItem } from '../../../../components/common/banners/SliderBanner/types';
import SliderBanner from '../../../../components/common/banners/SliderBanner';
import AppTitle from '../../../../components/common/AppTitle';
import styles from './styles.module.css';

const HeroBanner = () => {
  const { t } = useTranslation();

  const bannersData = t('home.heroBanners', {
    returnObjects: true,
    defaultValue: [],
  }) as SliderBannerItem[];

  const banners = bannersData.map(item => ({
    ...item,
    title: (
      <AppTitle variant="pageTitle" className={styles.title}>
        {item.title}
      </AppTitle>
    ),
  }));

  return <SliderBanner banners={banners} />;
};

export default HeroBanner;

import { useTranslation } from 'react-i18next';
import BaseBanner from '../../../../components/common/banners/BaseBanner';
import bannerImg from '../../../../assets/img/catalog/bannerImg.jpg';
import AppTitle from '../../../../components/common/AppTitle';
import styles from './styles.module.css';

const CatalogBanner = () => {
  const { t } = useTranslation();

  return (
    <BaseBanner
      image={{ src: bannerImg, alt: t('catalog.banner.altText') }}
      id={'1'}
      title={
        <AppTitle variant="pageTitle" className={styles.title}>
          {t('catalog.banner.title')}
        </AppTitle>
      }
      subtitle={<div className={styles.subtitle}>{t('catalog.banner.description')}</div>}
      animate={true}
    />
  );
};
export default CatalogBanner;

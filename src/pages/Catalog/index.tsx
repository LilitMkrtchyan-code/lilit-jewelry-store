import CatalogBanner from './components/CatalogBanner';
import CatalogContent from './components/CatalogContent';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import Advantages from '../../components/common/Advantages';
import Newsletter from '../../components/common/Newsletter';
import styles from './styles.module.css';

const Catalog = () => {
  return (
    <>
      <CatalogBanner />
      <div className={styles.contentWrapper}>
        <Breadcrumbs />
        <CatalogContent />
      </div>
      <Advantages />
      <Newsletter />
    </>
  );
};

export default Catalog;

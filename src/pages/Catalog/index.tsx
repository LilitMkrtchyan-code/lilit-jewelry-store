import CatalogBanner from './components/CatalogBanner';
import CatalogContent from './components/CatalogContent';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import styles from './styles.module.css';

const Catalog = () => {
  return (
    <>
      <CatalogBanner />
      <div className="container">
        <div className={styles.contentWrapper}>
          <Breadcrumbs />
          <CatalogContent />
        </div>
      </div>
    </>
  );
};

export default Catalog;

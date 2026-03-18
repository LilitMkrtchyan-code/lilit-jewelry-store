import CatalogBanner from './components/CatalogBanner';
import CatalogContent from './components/CatalogContent';
import styles from './styles.module.css';

const Catalog = () => {
  return (
    <div className={styles.cataloge}>
      <CatalogBanner />
      <div className="container">
        <CatalogContent />
      </div>
    </div>
  );
};

export default Catalog;

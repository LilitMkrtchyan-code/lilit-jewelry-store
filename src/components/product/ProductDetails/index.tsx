import type { ProductDetailsProps } from './types';
import Breadcrumbs from '../../common/Breadcrumbs';
import ProductGallery from '../ProductGallery';
import ProductInfo from '../ProductInfo';
import styles from './styles.module.css';

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className={styles.productDetails}>
      <Breadcrumbs productName={product.nameKey} className={styles.productBreadcrumbs} />
      <div className="container">
        <div className={styles.detailsInner}>
          <div className={styles.gallerySection}>
            <ProductGallery mainImage={product.image} galleryImages={product.galleryImages} />
          </div>
          <div className={styles.infoSection}>
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import type { ProductInfoProps } from './types';
import ProductSummary from '../ProductSummary';
import ProductExtraInfo from '../ProductExtraInfo';
import ProductServices from '../ProductServices';
import styles from './styles.module.css';

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles.productInfo}>
      <ProductSummary product={product} />
      <ProductExtraInfo product={product} />
      <ProductServices />
    </div>
  );
};

export default ProductInfo;

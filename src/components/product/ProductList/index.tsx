import { useNavigate } from 'react-router-dom';
import type { ProductListProps } from './types';
import ProductCard from '../../common/cards/ProductCard';
import styles from './styles.module.css';

const ProductList = ({ columns, products }: ProductListProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.productList}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClickProduct={() => navigate(`/product/${product.id}`)}
        />
      ))}
    </div>
  );
};

export default ProductList;

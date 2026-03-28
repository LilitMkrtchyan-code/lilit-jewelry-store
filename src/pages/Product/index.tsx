import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import ProductDetails from '../../components/product/ProductDetails';

const Product = () => {
  const { id } = useParams();
  const { data: productList } = useProducts();

  const products = productList?.pages.flatMap(page => page.data) ?? [];
  const product = products.find(product => product.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className='container'>
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;

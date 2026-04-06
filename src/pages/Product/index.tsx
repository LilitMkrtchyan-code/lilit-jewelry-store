import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import ProductDetails from '../../components/product/ProductDetails';
import SimilarProducts from '../../components/product/SimilarProducts';
import Advantages from '../../components/common/Advantages';

const Product = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(id ?? '');

  if (isLoading) return <div>Loading...</div>;
  if (isError || !product) return <div>Product not found</div>;

  return (
    <>
      <div className="container">
        <ProductDetails product={product} />
        <SimilarProducts product={product} />
      </div>
      <Advantages />
    </>
  );
};

export default Product;

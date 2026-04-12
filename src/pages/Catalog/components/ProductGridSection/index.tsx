import type { productGridProps } from './types';
import ProductList from '../../../../components/product/ProductList';
import Spinner from '../../../../components/common/Spinner';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';

const ProductGridSection = ({
  columns,
  currentCount,
  totalCount,
  products,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
}: productGridProps) => {
  if (isError) return <ErrorMessage />;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <ProductList columns={columns} products={products} />
      <Spinner
        isLoading={isFetchingNextPage}
        hasMore={hasNextPage}
        currentCount={currentCount}
        totalCount={totalCount}
        onClick={() => fetchNextPage()}
      />
    </>
  );
};
export default ProductGridSection;

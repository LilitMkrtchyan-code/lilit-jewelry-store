import type { productGridProps } from './types';
import ProductList from '../../../../components/product/ProductList';
import ShowMore from '../../../../components/common/ShowMore';
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
      <ShowMore
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

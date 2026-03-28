import { useTranslation } from 'react-i18next';
import type { ProductInfoProps } from './types';

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { t } = useTranslation();

  return <div>{t(product.nameKey)}</div>;
};
export default ProductInfo;

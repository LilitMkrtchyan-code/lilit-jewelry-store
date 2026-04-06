import { useTranslation } from 'react-i18next';
import LabelIcon from '../../common/icons/LabelIcon';
import { PRODUCT_SERVICES } from './const';
import styles from './styles.module.css';

const ProductServices = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.productServices}>
      {PRODUCT_SERVICES.map(({ icon: Icon, labelKey, to }) => (
        <LabelIcon
          key={labelKey}
          as="navlink"
          to={to}
          icon={<Icon size={20} strokeWidth={1} />}
          text={t(labelKey)}
          className={styles.serviceItem}
        />
      ))}
    </div>
  );
};

export default ProductServices;

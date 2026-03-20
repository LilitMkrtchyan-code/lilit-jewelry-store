import type { LoaderProps } from './types';
import { Spin } from 'antd';
import styles from './styles.module.css';

const Loader = ({ spinnerSize = 28, className = '', ...rest }: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <Spin
        indicator={
          <div
            className={`${styles.customSpinner} ${className}`}
            style={{ width: spinnerSize, height: spinnerSize }}
          />
        }
        {...rest}
      />
    </div>
  );
};
export default Loader;

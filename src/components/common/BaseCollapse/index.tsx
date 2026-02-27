import { Collapse } from 'antd';
import type { BaseCollapseProps } from './types';
import styles from './styles.module.css';

const BaseCollapse = ({ className = '', ...rest }: BaseCollapseProps) => {
  return (
    <Collapse
      ghost
      expandIconPlacement="end"
      {...rest}
      className={`${styles.baseCollapse} ${className}`}
    />
  );
};
export default BaseCollapse;

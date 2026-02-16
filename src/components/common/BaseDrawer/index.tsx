import { Drawer } from 'antd';
import type { BaseDrawerProps } from './types';
import styles from './styles.module.css';

const BaseDrawer = ({
  side = 'left',
  title = '',
  size = 400,
  closable = true,
  open,
  onClose,
  className = '',
  children,
  styles: drawerStyles,
}: BaseDrawerProps) => {
  const drawerClasses = [styles.baseDrawer, open ? styles.isOpen : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Drawer
      title={title}
      placement={side}
      size={size}
      closable={closable}
      onClose={onClose}
      open={open}
      forceRender
      rootClassName={drawerClasses}
      styles={{
        mask: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          WebkitBackdropFilter: 'blur(10px)',
        },
        ...drawerStyles,
      }}
    >
      {children}
    </Drawer>
  );
};

export default BaseDrawer;

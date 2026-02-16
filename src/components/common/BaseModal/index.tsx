import { Modal } from 'antd';
import type { BaseModalProps } from './types';
import styles from './styles.module.css';

const BaseModal = ({ open, onCancel, children, className = '' }: BaseModalProps) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      centered
      footer={null}
      destroyOnHidden
      className={`${styles.baseModal} ${className}`}
      mousePosition={{ x: 0, y: 0 }}
      transitionName="fade-slide"
      maskTransitionName="fade"
      width={{
        xs: '85%',
        sm: '80%',
        md: '80%',
        lg: '70%',
        xl: '900px',
        xxl: '1000px',
      }}
      styles={{
        mask: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          WebkitBackdropFilter: 'blur(10px)',
        },
      }}
    >
      <div className={styles.modalContent}>{children}</div>
    </Modal>
  );
};
export default BaseModal;

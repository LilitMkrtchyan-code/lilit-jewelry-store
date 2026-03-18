import { useToggle } from '../../../../../hooks/useToggle';
import type { NavDrawerProps } from './types';
import BaseDrawer from '../../../../common/BaseDrawer';
import MainNavigation from '../MainNavigation';
import ServiceNavigation from '../ServiceNavigation';
import Logo from '../../../../common/Logo';
import LanguageSwitcher from '../../../../common/LanguageSwitcher';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const NavigationDrawer = ({ open, onClose }: NavDrawerProps) => {
  const { isVisible, show, hide } = useToggle();

  return (
    <>
      <BaseDrawer
        title={<Logo className={styles.navLogo} onClose={onClose} />}
        size={500}
        open={open}
        onClose={onClose}
        closable={false}
        className={styles.navDrawer}
        styles={{
          body: { padding: 0 },
          header: {
            borderBottom: 'none',
          },
        }}
      >
        <>
          <div className="customClose">
            <CloseOutlined onClick={onClose} />
          </div>
          <MainNavigation onClose={onClose} isOpen={open} />
          <ServiceNavigation onClose={onClose} onOpenLang={show} />
        </>
      </BaseDrawer>
      <LanguageSwitcher open={isVisible} onCancel={hide} />
    </>
  );
};

export default NavigationDrawer;

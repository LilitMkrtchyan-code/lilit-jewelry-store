import type { DrawerProps } from 'antd';
import { type ReactNode } from 'react';

export type BaseDrawerProps = {
  side?: 'left' | 'right' | 'top' | 'bottom';
  title?: ReactNode;
  size?: number;
  closable?: boolean;
  open: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  styles?: DrawerProps['styles'];
};

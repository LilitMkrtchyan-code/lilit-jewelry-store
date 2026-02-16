import type { ReactNode } from 'react';

export type BaseModalProps = {
  open: boolean;
  onCancel: () => void;
  children: ReactNode;
  className?: string;
};

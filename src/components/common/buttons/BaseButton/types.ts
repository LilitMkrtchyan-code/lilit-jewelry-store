import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'link' | 'shadow' | 'dark';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

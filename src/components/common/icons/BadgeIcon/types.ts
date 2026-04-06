import type { ReactNode } from 'react';

type BaseProps = {
  icon: ReactNode;
  count?: number;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};

type NavLinkProps = BaseProps & {
  to: string;
  as: 'navlink';
};

type LinkProps = BaseProps & {
  to: string;
  as: 'link';
};

type ButtonProps = BaseProps & {
  as?: 'button';
  to?: never;
};

export type BadgeIconProps = NavLinkProps | ButtonProps | LinkProps;

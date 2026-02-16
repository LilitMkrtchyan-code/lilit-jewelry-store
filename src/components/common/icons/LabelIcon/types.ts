import type { ReactNode } from 'react';

export type BaseProps = {
  icon: ReactNode;
  text?: string;
  hideTextMobile?: boolean;
  className?: string;
  textClassName?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

type LinkProps = BaseProps & {
  to: string;
  as: 'link';
};

type NavLinkProps = BaseProps & {
  to: string;
  as: 'navlink';
};

type ButtonProps = BaseProps & {
  as?: 'button';
  to?: never;
};

export type LabelIconProps = LinkProps | NavLinkProps | ButtonProps;

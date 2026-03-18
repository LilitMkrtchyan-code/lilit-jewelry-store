import type { InputHTMLAttributes } from 'react';

export type SelectionControlProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: 'checkbox' | 'radio';
};

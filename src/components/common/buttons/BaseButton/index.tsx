import type { BaseButtonProps } from './types';
import styles from './styles.module.css';

const BaseButton = ({
  onClick,
  children,
  variant = 'link',
  className = '',
  disabled = false,
  ...rest
}: BaseButtonProps) => {
  const buttonClasses = [
    styles.baseButton,
    styles[variant],
    variant === 'link' ? 'line-disappear' : '',
    className,
  ].join(' ');

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
export default BaseButton;

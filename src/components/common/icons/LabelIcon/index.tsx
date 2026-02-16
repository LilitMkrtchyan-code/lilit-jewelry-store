import type { LabelIconProps } from './types';
import { COMPONENTS } from './const';
import styles from './styles.module.css';

const LabelIcon = ({
  icon,
  text,
  hideTextMobile = false,
  ariaLabel = '',
  className = '',
  textClassName = '',
  onClick,
  to,
  as = 'button',
}: LabelIconProps) => {
  const Tag = COMPONENTS[as];

  const baseClasses = `${styles.iconLabel} ${className}`.trim();
  const NavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? styles.active : ''}`.trim();

  return (
    <Tag
      {...(to ? { to } : { type: 'button' })}
      className={as === 'navlink' ? NavLinkClasses : baseClasses}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {icon}
      {text && (
        <span
          className={`${styles.text} ${textClassName} ${hideTextMobile ? styles.hideText : ''}`}
        >
          {text}
        </span>
      )}
    </Tag>
  );
};
export default LabelIcon;

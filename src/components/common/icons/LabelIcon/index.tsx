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
  const isNavLink = as === 'navlink';

  const baseClasses = `${styles.iconLabel} ${className}`.trim();

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? styles.active : ''}`.trim();

  const labelContent = (isActive: boolean = false) => {
    const textClasses = [
      styles.text,
      textClassName,
      hideTextMobile ? styles.hideText : '',
      isActive ? 'line-disappear' : 'line-flow',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <>
        {icon}
        {text && <span className={textClasses}>{text}</span>}
      </>
    );
  };

  return (
    <Tag
      {...(isNavLink ? { to } : { type: 'button' })}
      className={isNavLink ? navLinkClasses : baseClasses}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {isNavLink ? ({ isActive }: { isActive: boolean }) => labelContent(isActive) : labelContent()}
    </Tag>
  );
};
export default LabelIcon;

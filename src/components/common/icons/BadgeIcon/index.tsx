import type { BadgeIconProps } from './types';
import { COMPONENTS } from './const';
import styles from './styles.module.css';

const BadgeIcon = ({
  icon,
  count = 0,
  onClick,
  to,
  as = 'button',
  ariaLabel = '',
  className = '',
}: BadgeIconProps) => {
  const Tag = COMPONENTS[as];

  const isLink = as === 'navlink' || as === 'link';

  const baseClasses = `${styles.badgeIcon} ${className} ${count > 0 ? styles.quantity : ''}`;
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? styles.active : ''}`.trim();

  return (
    <Tag
      {...(isLink ? { to } : { type: 'button' })}
      className={as === 'navlink' ? navLinkClasses : baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </Tag>
  );
};

export default BadgeIcon;

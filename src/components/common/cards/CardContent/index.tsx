import BaseButton from '../../buttons/BaseButton';
import type { CardContentProps } from './types';
import styles from './styles.module.css';

const CardContent = ({
  title,
  description,
  buttonText,
  onBtnClick,
  animate = false,
  align = 'center',
  className = '',
  titleClassName = '',
  descClassName = '',
}: CardContentProps) => {
  const contentClasses = [
    styles.cardContent,
    styles[align],
    animate ? 'animate-monolith' : '',
    className,
  ].join(' ');

  return (
    <div className={contentClasses}>
      <div className={styles.titleWrapper}>
        <div className={`${styles.title} ${titleClassName}`}>{title}</div>
      </div>
      {description && <div className={`${styles.description} ${descClassName}`}>{description}</div>}
      {buttonText && (
        <div className={styles.buttonWrapper}>
          <BaseButton label={buttonText} onClick={onBtnClick} className={styles.cardBtn} />
        </div>
      )}
    </div>
  );
};
export default CardContent;

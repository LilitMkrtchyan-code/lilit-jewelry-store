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
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={contentClasses}>
      <div className={`${styles.title} ${titleClassName}`}>{title}</div>
      {description && <div className={`${styles.description} ${descClassName}`}>{description}</div>}
      {buttonText && (
        <BaseButton onClick={onBtnClick} className={styles.cardBtn}>
          {buttonText}
        </BaseButton>
      )}
    </div>
  );
};
export default CardContent;

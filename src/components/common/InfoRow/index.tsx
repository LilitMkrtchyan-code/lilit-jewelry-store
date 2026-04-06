import { ArrowRight } from 'lucide-react';
import type { InfoRowProps } from './types';
import styles from './styles.module.css';

const InfoRow = ({ label, onClick }: InfoRowProps) => {
  return (
    <button className={styles.infoRow} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      <ArrowRight size={20} strokeWidth={1} className={styles.arrow} />
    </button>
  );
};

export default InfoRow;

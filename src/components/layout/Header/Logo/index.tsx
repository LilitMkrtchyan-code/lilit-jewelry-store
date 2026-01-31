import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Logo() {
  const navigate = useNavigate();

  return (
    <div className={styles.logoContainer} onClick={() => navigate('/')}>
      <span className={styles.logoText}>Kassaman</span>
    </div>
  );
}

export default Logo;

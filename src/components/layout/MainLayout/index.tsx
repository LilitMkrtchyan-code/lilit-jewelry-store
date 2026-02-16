import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

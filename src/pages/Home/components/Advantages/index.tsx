import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import type { AdvantageItem } from './types';
import { ShieldCheck, Brush, RefreshCcw, Box } from 'lucide-react';
import styles from './styles.module.css';

const Advantages = () => {
  const { t } = useTranslation();

  const ADVANTAGES: AdvantageItem[] = [
    {
      icon: <ShieldCheck size={32} strokeWidth={1} />,
      title: t('home.advantages.materials.title'),
    },
    {
      icon: <Brush size={32} strokeWidth={1} />,
      title: t('home.advantages.cleaning.title'),
    },
    {
      icon: <RefreshCcw size={32} strokeWidth={1} />,
      title: t('home.advantages.resizing.title'),
    },
    {
      icon: <Box size={32} strokeWidth={1} />,
      title: t('home.advantages.delivery.title'),
    },
  ];

  return (
    <section className={styles.advantages}>
      <div className="container">
        <Row
          gutter={[
            { xs: 16, sm: 24, md: 60, lg: 48 },
            { xs: 32, sm: 32, md: 32, lg: 48 },
          ]}
          justify="center"
        >
          {ADVANTAGES.map((item, index) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={index}>
              <div className={styles.advantageItem}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Advantages;

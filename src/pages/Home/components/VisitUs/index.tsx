import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import AppTitle from '../../../../components/common/AppTitle';
import BaseButton from '../../../../components/common/buttons/BaseButton';
import giftBracelet from '../../../../assets/img/bracelets/giftBracelet.jpg';
import styles from './styles.module.css';

const VisitUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const tPath = 'home.visitUs';

  return (
    <section className={styles.visitUs}>
      <Row align="middle" gutter={0}>
        <Col xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 12 }}>
          <div className={styles.infoContent}>
            <AppTitle variant="sectionTitle" className={styles.title}>
              {t(`${tPath}.title`)}
            </AppTitle>
            <p className={styles.description}>{t(`${tPath}.description`)}</p>
            <div className={styles.infoBox}>
              <h3 className={styles.subtitle}>{t(`${tPath}.subtitle`)}</h3>
              <address className={styles.address}>{t(`${tPath}.address`)}</address>
              <div className={styles.schedule}>
                <div className={styles.dayGroup}>
                  <span className={styles.day}>{t(`${tPath}.weekdays`)}</span>
                  <span className={styles.time}>{t(`${tPath}.weekdaysTime`)}</span>
                </div>
                <div className={styles.dayGroup}>
                  <span className={styles.day}>{t(`${tPath}.weekend`)}</span>
                  <span className={styles.time}>{t(`${tPath}.weekendTime`)}</span>
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <BaseButton className={styles.button} onClick={() => navigate('/contact')}>
                {t(`${tPath}.cta`)}
              </BaseButton>
            </div>
          </div>
        </Col>
        <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 12 }}>
          <div className={styles.imageWrapper}>
            <img src={giftBracelet} alt={t(`${tPath}.altText`)} className={styles.image} />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default VisitUs;

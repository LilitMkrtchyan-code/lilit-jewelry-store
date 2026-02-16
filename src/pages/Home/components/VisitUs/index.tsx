import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { T_PATH } from './const';
import { Row, Col } from 'antd';
import AppTitle from '../../../../components/common/AppTitle';
import BaseButton from '../../../../components/common/buttons/BaseButton';
import cross from '../../../../assets/img/cross/cross.jpg';
import styles from './styles.module.css';

const VisitUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className={styles.visitUs}>
      <Row align="middle" gutter={0}>
        <Col xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 12 }}>
          <div className={styles.infoContent}>
            <AppTitle variant="sectionTitle" className={styles.title}>
              {t(`${T_PATH}.title`)}
            </AppTitle>
            <p className={styles.description}>{t(`${T_PATH}.description`)}</p>
            <div className={styles.infoBox}>
              <h3 className={styles.subtitle}>{t(`${T_PATH}.subtitle`)}</h3>
              <address className={styles.address}>{t(`${T_PATH}.address`)}</address>
              <div className={styles.schedule}>
                <div className={styles.dayGroup}>
                  <span className={styles.day}>{t(`${T_PATH}.weekdays`)}</span>
                  <span className={styles.time}>{t(`${T_PATH}.weekdaysTime`)}</span>
                </div>
                <div className={styles.dayGroup}>
                  <span className={styles.day}>{t(`${T_PATH}.weekend`)}</span>
                  <span className={styles.time}>{t(`${T_PATH}.weekendTime`)}</span>
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <BaseButton className={styles.button} onClick={() => navigate('/store-locator')}>
                {t(`${T_PATH}.cta`)}
              </BaseButton>
            </div>
          </div>
        </Col>
        <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 12 }}>
          <div className={styles.imageWrapper}>
            <img
              src={cross}
              alt={t(`${T_PATH}.altText`)}
              className={styles.image}
              loading="lazy"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default VisitUs;

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { T_PATH } from './const';
import { Col, Grid, Row } from 'antd';
import PhilosophyGallery from '../PhilosophyGallery';
import CardContent from '../../../../components/common/cards/CardContent';
import { getImagesDesc } from './utils';
import { GALLERY_IMAGES } from './const';
import styles from './styles.module.css';

const { useBreakpoint } = Grid;

const Philosophy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const imagesWithDesc = useMemo(() => getImagesDesc(GALLERY_IMAGES, t), [t]);

  const contentAlign = screens.lg ? 'left' : 'center';

  return (
    <section className={styles.philosophy}>
      <div className="container">
        <Row gutter={0} align="middle">
          <Col xs={{ order: 1, span: 24 }} lg={{ order: 1, span: 12 }}>
            <PhilosophyGallery images={imagesWithDesc} />
          </Col>
          <Col xs={{ order: 2, span: 24 }} lg={{ order: 2, span: 12 }}>
            <div className={styles.contentWrapper}>
              <CardContent
                title={t(`${T_PATH}.title`)}
                description={t(`${T_PATH}.description`)}
                titleClassName={styles.title}
                descClassName={styles.desc}
                buttonText={t(`${T_PATH}.cta`)}
                onBtnClick={() => navigate('/about')}
                align={contentAlign}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Philosophy;

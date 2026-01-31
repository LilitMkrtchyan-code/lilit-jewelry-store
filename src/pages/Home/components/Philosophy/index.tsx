import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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

  const imagesWithDesc = getImagesDesc(GALLERY_IMAGES, t);

  const contentAlign = screens.lg ? 'left' : 'center';

  return (
    <section className={styles.philosophy}>
      <Row gutter={0} align="middle">
        <Col xs={{ order: 1, span: 24 }} lg={{ order: 1, span: 12 }}>
          <PhilosophyGallery images={imagesWithDesc} />
        </Col>
        <Col xs={{ order: 2, span: 24 }} lg={{ order: 2, span: 12 }}>
          <div className={styles.contentWrapper}>
            <CardContent
              title={t('home.philosophy.title')}
              description={t('home.philosophy.description')}
              titleClassName={styles.title}
              descClassName={styles.desc}
              buttonText={t('home.philosophy.cta')}
              onBtnClick={() => navigate('/about')}
              align={contentAlign}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Philosophy;

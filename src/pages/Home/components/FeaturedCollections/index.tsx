import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCollections } from '../../../../hooks/useCollections';
import { Col, Row } from 'antd';
import VisualCard from '../../../../components/common/cards/VisualCard';
import CardContent from '../../../../components/common/cards/CardContent';
import AppTitle from '../../../../components/common/AppTitle';
import { ErrorMessage } from '../../../../components/common/ErrorMessage';
import styles from './styles.module.css';

const FeaturedCollections = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: collections, isLoading, isError } = useCollections();

  return (
    <section className={styles.collections}>
      <AppTitle as={'h2'} variant={'sectionTitle'} className={styles.title}>
        {t('home.featuredCollections.title')}
      </AppTitle>
      {isError ? (
        <ErrorMessage message={t('errors.default')} />
      ) : isLoading ? (
        <div className="loading">Loading Collections...</div>
      ) : (
        <div className={styles.collectionList}>
          <Row gutter={[30, 30]}>
            {collections?.map(collection => (
              <Col key={collection.id} span={24} md={12} lg={12}>
                <VisualCard
                  className={styles.ratio}
                  contentClassName={styles.content}
                  image={{ src: collection.image, alt: collection.slug }}
                  onClick={() => navigate(`/collections/${collection.slug}`)}
                  hoverEffect={false}
                >
                  <CardContent
                    title={t(collection.titleKey)}
                    description={collection.subtitleKey ? t(collection.subtitleKey) : undefined}
                    buttonText={t('home.featuredCollections.cta')}
                    animate={true}
                    titleClassName={styles.contentTitle}
                    descClassName={styles.desc}
                  />
                </VisualCard>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </section>
  );
};
export default FeaturedCollections;

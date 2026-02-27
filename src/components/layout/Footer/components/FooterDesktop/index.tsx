import { useTranslation } from 'react-i18next';
import { FOOTER_COLUMNS } from '../../const';
import { Row, Col } from 'antd';
import SocialLinks from '../../../../common/SocialLinks';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const FooterDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footerDesktop}>
      <Row gutter={[32, 40]}>
        {FOOTER_COLUMNS.map(column => (
          <Col
            key={column.key}
            xs={column.isSocial ? 24 : 0}
            md={12}
            lg={6}
            className={column.isSocial ? styles.socialColumn : ''}
          >
            <div className={styles.footerColumn}>
              <h4 className={styles.title}>{t(column.label)}</h4>
              {column.isSocial && column.socials ? (
                <div className={styles.socialContent}>
                  <SocialLinks socials={column.socials} />
                  {column.contact && (
                    <address className={styles.contactWrapper}>
                      <span className={styles.contactLabel}>{t(column.contact?.labelKey)}</span>
                      <a
                        href={`tel:${column.contact.phone}`}
                        className={`${styles.phoneLink} line-flow`}
                      >
                        {column.contact.phone}
                      </a>
                    </address>
                  )}
                </div>
              ) : (
                <ul className={styles.linkList}>
                  {column.links?.map(link => (
                    <li key={link.labelKey}>
                      <Link to={link.to} className={`${styles.link} line-flow`}>
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default FooterDesktop;

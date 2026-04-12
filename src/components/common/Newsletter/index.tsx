import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { FormStatus } from './types';
import AppTitle from '../AppTitle';
import BaseButton from '../buttons/BaseButton';
import styles from './styles.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        if (data.message?.toLowerCase().includes('already exists')) {
          setErrorMessage(t('newsletter.alreadySubscribed'));
        } else {
          setErrorMessage(data.message || t('newsletter.error'));
        }
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('newsletter.error'));
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.content}>
          <AppTitle as="h2" variant="sectionTitle" className={styles.title}>
            {t('newsletter.title')}
          </AppTitle>
          <div className={styles.subtitle}>{t('newsletter.subtitle')}</div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div
              className={`${styles.formGroup} ${status === 'loading' ? styles.formGroupLoading : ''}`}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                required
                disabled={status === 'loading'}
                className={`${styles.input} ${status === 'error' ? styles.inputError : ''}`}
              />
              <div className={styles.actions}>
                <BaseButton
                  variant="dark"
                  type="submit"
                  disabled={status === 'loading'}
                  className={styles.formBtn}
                >
                  {t('newsletter.button')}
                </BaseButton>
              </div>
            </div>
          </form>

          <div className={styles.feedback}>
            {status === 'success' && (
              <div className={styles.successMessage}>{t('newsletter.success')}</div>
            )}

            {status === 'error' && <div className={styles.errorMessage}>{errorMessage}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;

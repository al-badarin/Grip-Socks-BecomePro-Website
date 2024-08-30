import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    // TODO: change the texts in .pricingDescription

    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.sectionTitle}>Цени</h2>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>1 Чифт</h3>
          <p className={styles.price}>15.99 лв.</p>
          <p className={styles.pricingDescription}>
            Перфектен за пробване на нашите Grip Socks.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>5 Чифта</h3>
          <p className={styles.price}>
            <span className={styles.oldPrice}>
              79.95 лв.
              <br />
            </span>{' '}
            69.99 лв.
          </p>
          <p className={styles.pricingDescription}>
            Получавате отстъпка и идеален избор за редовни играчи.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>10 Чифта</h3>
          <p className={styles.price}>
            <span className={styles.oldPrice}>
              159.90 лв.
              <br />
            </span>{' '}
            129.99 лв.
          </p>
          <p className={styles.pricingDescription}>
            Най-добра стойност за сериозни атлети с голяма отстъпка.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

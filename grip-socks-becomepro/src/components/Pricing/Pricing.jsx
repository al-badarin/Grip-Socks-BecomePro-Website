import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  // TODO: change the texts
  // TODO: make appear the real price for 5/10 pairs (strokover text)

  return (
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
          <p className={styles.price}>69.99 лв.</p>
          <p className={styles.pricingDescription}>
            Идеален за редовни играчи.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>10 Чифта</h3>
          <p className={styles.price}>129.99 лв.</p>
          <p className={styles.pricingDescription}>
            Най-добра стойност за сериозни атлети.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

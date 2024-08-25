import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.sectionTitle}>Pricing</h2>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>1 Pair</h3>
          <p className={styles.price}>$15</p>
          <p className={styles.pricingDescription}>
            Perfect for trying out our Grip Socks.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>3 Pairs</h3>
          <p className={styles.price}>$40</p>
          <p className={styles.pricingDescription}>
            Ideal for regular players.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>5 Pairs</h3>
          <p className={styles.price}>$60</p>
          <p className={styles.pricingDescription}>
            Best value for serious athletes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

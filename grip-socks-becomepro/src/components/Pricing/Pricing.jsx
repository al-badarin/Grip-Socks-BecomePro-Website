import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.sectionTitle}>Цени</h2>
      {/* <div className={styles.promoContainer}>
        <div className={styles.promoBanner}>
          <p className={styles.promoText}>
            Специална оферта!{' '}
            <span className={styles.highlight}>
              Купи 2 и получи 1 безплатно!
            </span>
            <br />
            Офертата е валидна до 08.09.2024 23:59 ч.
          </p>
        </div>
      </div> */}
      <div className={styles.pricingContainer}>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>1 Чифт</h3>
          <p className={styles.price}>15.99 лв.</p>
          <p className={styles.pricingDescription}>
            Идеален избор да пробвате нашите висококачествени Grip Socks и да
            усетите разликата.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>5 Чифта</h3>
          <p className={styles.price}>
            <span className={styles.oldPrice}>
              79.95 лв.
              <br />
            </span>
            69.99 лв.
          </p>
          <p className={styles.pricingDescription}>
            Оптимално количество за играчи, които търсят надеждност и комфорт на
            всяка тренировка.
          </p>
        </div>
        <div className={styles.pricingOption}>
          <h3 className={styles.pricingTitle}>10 Чифта</h3>
          <p className={styles.price}>
            <span className={styles.oldPrice}>
              159.90 лв.
              <br />
            </span>
            129.99 лв.
          </p>
          <p className={styles.pricingDescription}>
            Максимална стойност и отлично качество на най-изгодна цена за
            атлети, които не правят компромиси.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

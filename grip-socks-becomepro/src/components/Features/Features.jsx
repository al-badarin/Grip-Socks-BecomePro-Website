import React from 'react';
import styles from './Features.module.css';
import { FaShieldAlt, FaFutbol, FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.sectionTitle}>Why Choose Our Grip Socks?</h2>
      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <FaShieldAlt className={styles.icon} />
          <h3 className={styles.featureTitle}>Top Quality</h3>
          <p className={styles.featureDescription}>
            Our socks are made from high-quality materials to ensure durability
            and comfort.
          </p>
        </div>
        <div className={styles.feature}>
          <FaFutbol className={styles.icon} />
          <h3 className={styles.featureTitle}>Enhanced Grip</h3>
          <p className={styles.featureDescription}>
            Provides superior grip to enhance your performance on the field.
          </p>
        </div>
        <div className={styles.feature}>
          <FaCheckCircle className={styles.icon} />
          <h3 className={styles.featureTitle}>Comfort Fit</h3>
          <p className={styles.featureDescription}>
            Designed to fit snugly, preventing blisters and ensuring comfort
            during the game.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

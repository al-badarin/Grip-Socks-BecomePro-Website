import React from 'react';
import styles from './Features.module.css';
import { FaShieldAlt, FaFutbol, FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.sectionTitle}>
        Защо да изберете нашите Grip Socks?
      </h2>
      <div className={styles.featuresContainer}>
        <div className={styles.feature}>
          <FaShieldAlt className={styles.icon} />
          <h3 className={styles.featureTitle}>Високо качество</h3>
          <p className={styles.featureDescription}>
            Нашите чорапи са изработени от висококачествени материали за да
            осигурят издръжливост и комфорт.
          </p>
        </div>
        <div className={styles.feature}>
          <FaFutbol className={styles.icon} />
          <h3 className={styles.featureTitle}>Подобрено сцепление</h3>
          <p className={styles.featureDescription}>
            Осигуряват уникално стабилно сцепление, за да подобрите
            представянето си на терена.
          </p>
        </div>
        <div className={styles.feature}>
          <FaCheckCircle className={styles.icon} />
          <h3 className={styles.featureTitle}>Комфортно прилягане</h3>
          <p className={styles.featureDescription}>
            Проектирани да прилягат плътно, предотвратявайки появата на пришки,
            крампи и мехури, осигурявайки комфорт по време на игра.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

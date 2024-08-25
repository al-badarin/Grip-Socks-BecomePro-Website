import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Grip Socks BecomePro</h1>
        <p className={styles.heroSubtitle}>
          Подобрете представянето си с най-добрите футболни грип чорапи.
        </p>
        <a href="#features" className={styles.ctaBtn}>
          Научете повече
        </a>
      </div>
    </section>
  );
};

export default Hero;

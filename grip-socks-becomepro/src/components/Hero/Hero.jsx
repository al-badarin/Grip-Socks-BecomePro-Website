import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Grip Socks by BecomePro</h1>
        <p className={styles.heroSubtitle}>
          Enhance your performance with the best football grip socks.
        </p>
        <a href="#features" className={styles.ctaBtn}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;

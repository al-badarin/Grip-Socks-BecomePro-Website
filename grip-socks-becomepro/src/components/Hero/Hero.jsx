import React from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.promoBanner}>
        <Link
          to="pricing"
          smooth={true}
          duration={500}
          className={styles.promoLink}
        >
          💥 Специална оферта: Купи 2 и получи 1 <span className='green'>БЕЗПЛАТНО</span>! Валидна до 08.09.2024 💥
        </Link>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Grip Socks BecomePro</h1>
        <p className={styles.heroSubtitle}>
          Подобрете представянето си с най-добрите футболни грип чорапи.
        </p>

        <li>
          <Link
            to="features"
            className={styles.ctaBtn}
            smooth={true}
            duration={500}
          >
            Научете повече
          </Link>
        </li>
      </div>
    </section>
  );
};

export default Hero;

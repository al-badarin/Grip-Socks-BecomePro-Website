import React from 'react';
import { Link } from 'react-scroll';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
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

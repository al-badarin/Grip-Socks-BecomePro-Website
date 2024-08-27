import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.navigation}>
          <h4 className={styles.footerTitle}>Бързи връзки</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#home">Начало</a>
            </li>
            <li>
              <a href="#features">Характеристики</a>
            </li>
            <li>
              <a href="#pricing">Цени</a>
            </li>
            <li>
              <a href="#order">Поръчай сега</a>
            </li>
            <li>
              <a href="#faq">Често задавани въпроси</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4 className={styles.footerTitle}>Контакти</h4>
          <p>Email: become.pro2024@gmail.com</p>
          <p>Телефон: +359 888881476</p>
        </div>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Последвайте ни</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {currentYear} BecomePro. Всички права запазени.</p>
      </div>
    </footer>
  );
};

export default Footer;

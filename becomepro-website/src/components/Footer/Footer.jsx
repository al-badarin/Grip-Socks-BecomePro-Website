import React from 'react';
import styles from './Footer.module.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

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
          <p>
            Email:{' '}
            <a className={styles.email} href="mailto:become.pro2024@gmail.com">
              become.pro2024@gmail.com
            </a>
          </p>
          <p>Телефон: +359 888881476</p>
        </div>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Последвайте ни</h4>
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61559578864716"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@become.pro2024"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              target="_blank"
              href="https://youtube.com/@becomepro-football?si=LY7uv641hzkl43"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/become.pro2024"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/become-pro"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
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

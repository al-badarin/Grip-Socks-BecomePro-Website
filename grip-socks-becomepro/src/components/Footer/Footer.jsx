import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.navigation}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#order">Order Now</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <p>Email: become.pro2024@gmail.com</p>
          <p>Phone: +359 888881476</p>
        </div>
        <div className={styles.social}>
          <h4 className={styles.footerTitle}>Follow Us</h4>
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
        <p>© {currentYear} BecomePro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Adjust the path according to your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="BecomePro Logo" className={styles.logo} />
          <div className={styles.brandTitle}>BecomePro</div>
        </div>
        <div className={styles.toggleButton} onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav
          ref={menuRef}
          className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}
        >
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                Начало
              </a>
            </li>
            <li>
              <a href="#features" onClick={closeMenu}>
                Характеристики
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={closeMenu}>
                Цени
              </a>
            </li>
            <li>
              <a href="#order" onClick={closeMenu}>
                Поръчай сега
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '/assets/logo.png';

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
        <Link to="home" smooth={true} duration={500}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="BecomePro Logo" className={styles.logo} />
            <div className={styles.brandTitle}>BecomePro</div>
          </div>
        </Link>
        <div className={styles.toggleButton} onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav
          ref={menuRef}
          className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}
        >
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                Начало
              </Link>
            </li>
            <li>
              <Link
                to="features"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Характеристики
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Цени
              </Link>
            </li>
            <li>
              <Link to="order" smooth={true} duration={500} onClick={closeMenu}>
                Поръчай сега
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Отзиви
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500} onClick={closeMenu}>
                Често задавани въпроси
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Adjust the path according to your file structure

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

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
                <nav className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#order">Order Now</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

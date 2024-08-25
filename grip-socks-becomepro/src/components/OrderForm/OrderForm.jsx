import React, { useState } from 'react';
import styles from './OrderForm.module.css';
import emailjs from 'emailjs-com';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    quantity: 1,
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.target,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Order submitted successfully!');
        },
        (error) => {
          alert('An error occurred, please try again.');
        }
      );

    // Clear the form
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      quantity: 1,
      address: '',
    });
  };

  return (
    <section id="order" className={styles.orderForm}>
      <h2 className={styles.sectionTitle}>Order Your Grip Socks</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="quantity">Number of Pairs:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address of Ekont/Speedy:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.ctaBtn}>
          Submit Order
        </button>
      </form>
    </section>
  );
};

export default OrderForm;

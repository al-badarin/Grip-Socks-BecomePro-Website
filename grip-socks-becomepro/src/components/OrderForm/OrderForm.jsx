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

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? '' : 'Моля, въведете име.';
    tempErrors.lastName = formData.lastName ? '' : 'Моля, въведете фамилия.';
    tempErrors.phoneNumber = formData.phoneNumber.match(/^\+?[0-9]{7,15}$/)
      ? ''
      : 'Моля, въведете валиден телефонен номер.';
    tempErrors.quantity =
      formData.quantity > 0 ? '' : 'Моля, въведете валиден брой.';
    tempErrors.address = formData.address ? '' : 'Моля, въведете адрес.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          e.target,
          'YOUR_USER_ID' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            alert('Поръчката е изпратена успешно!');
          },
          (error) => {
            alert('Възникна грешка, моля опитайте отново.');
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
    } else {
      alert('Моля, попълнете всички полета коректно.');
    }
  };

  return (
    <section id="order" className={styles.orderForm}>
      <h2 className={styles.sectionTitle}>Поръчайте Grip Socks</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Име:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Фамилия:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Телефонен номер:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <span className={styles.error}>{errors.phoneNumber}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="quantity">Брой чифта:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
          {errors.quantity && (
            <span className={styles.error}>{errors.quantity}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Адрес на Еконт/Спиди:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && (
            <span className={styles.error}>{errors.address}</span>
          )}
        </div>
        <button type="submit" className={styles.ctaBtn}>
          Изпратете поръчка
        </button>
      </form>
    </section>
  );
};

export default OrderForm;

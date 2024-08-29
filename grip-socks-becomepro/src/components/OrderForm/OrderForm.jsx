import React, { useState } from 'react';
import styles from './OrderForm.module.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

// Constants for EmailJS configuration
const SERVICE_ID = 'grip-socks';
const USER_TEMPLATE_ID = 'grip-socks-customers';
const TEAM_TEMPLATE_ID = 'grip-socks-team';
const USER_ID = 'KIebeciB9J7_v05kG';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    quantity: 1,
    address: '',
  });

  const [errors, setErrors] = useState({});

  // Temporary functions to trigger success and error messages for testing
  // const triggerSuccessMessage = () => {
  //   toast.success('Поръчката е изпратена успешно!');
  // };

  // const triggerErrorMessage = () => {
  //   toast.error('Възникна грешка, моля опитайте отново.');
  // };

  // Validation function to check form inputs
  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? '' : 'Моля, въведете име.';
    tempErrors.lastName = formData.lastName ? '' : 'Моля, въведете фамилия.';
    tempErrors.phoneNumber = formData.phoneNumber.match(/^\+?[0-9]{7,15}$/)
      ? ''
      : 'Моля, въведете валиден телефонен номер.';
    tempErrors.email = formData.email.match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    )
      ? ''
      : 'Моля, въведете валиден имейл адрес.';
    tempErrors.quantity =
      formData.quantity > 0 ? '' : 'Моля, въведете валиден брой.';
    tempErrors.address = formData.address ? '' : 'Моля, въведете адрес.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Send email to the user
      emailjs.sendForm(SERVICE_ID, USER_TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          toast.success('Поръчката е изпратена успешно!');
        },
        (error) => {
          toast.error('Възникна грешка, моля опитайте отново.');
          console.error('EmailJS Error:', error); // Log any errors from EmailJS
        }
      );

      // Send email to your team
      emailjs.send(SERVICE_ID, TEAM_TEMPLATE_ID, formData, USER_ID).then(
        (result) => {
          console.log('Team notification sent successfully.');
        },
        (error) => {
          console.log('Failed to send team notification.');
          console.error('EmailJS Error:', error); // Log any errors from EmailJS
        }
      );

      // Clear the form after submission
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
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
          <label htmlFor="email">Имейл:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
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

      {/* Test buttons for triggering toast notifications */}
      {/* <div className={styles.testButtons}>
        <button onClick={triggerSuccessMessage} className={styles.testBtn}>
          Trigger Success Message
        </button>
        <button onClick={triggerErrorMessage} className={styles.testBtn}>
          Trigger Error Message
        </button>
      </div> */}

      <ToastContainer />
    </section>
  );
};

export default OrderForm;

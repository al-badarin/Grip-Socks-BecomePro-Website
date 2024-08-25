import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'These Grip Socks have significantly improved my performance on the field. I feel more secure with every step.',
      name: 'John Doe',
      role: 'Professional Footballer',
    },
    {
      quote:
        'The quality is top-notch, and they really help prevent blisters. Highly recommend to any serious athlete.',
      name: 'Jane Smith',
      role: 'Fitness Enthusiast',
    },
    {
      quote:
        "Comfortable, durable, and they provide great grip. I don't play without them anymore.",
      name: 'Mike Johnson',
      role: 'Amateur Soccer Player',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.role}>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

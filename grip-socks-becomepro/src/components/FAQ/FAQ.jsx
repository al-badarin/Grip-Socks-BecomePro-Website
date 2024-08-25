import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What sizes do the Grip Socks come in?',
      answer:
        'Our Grip Socks are available in multiple sizes, ranging from small to extra-large, to fit all foot sizes.',
    },
    {
      question: 'How do I care for my Grip Socks?',
      answer:
        'For best results, wash your Grip Socks in cold water and let them air dry. Avoid using bleach or fabric softeners.',
    },
    {
      question: 'Can I wear these socks for sports other than football?',
      answer:
        'Yes! While our Grip Socks are designed for football, they are versatile and can be used for other sports like basketball, running, and more.',
    },
  ];

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={styles.toggleIcon}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

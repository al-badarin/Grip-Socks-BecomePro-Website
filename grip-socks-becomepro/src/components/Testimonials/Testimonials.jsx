import React from 'react';
import styles from './Testimonials.module.css';

// TODO: add some stories from the instagram hihlights?!?!

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Тези Grip Socks значително подобриха представянето ми на терена. Чувствам се по-сигурен с всяка стъпка.',
      name: 'Иван Иванов',
      role: 'Професионален футболист',
    },
    {
      quote:
        'Качеството е изключително, и наистина помагат за предотвратяване на мехури. Препоръчвам ги на всеки сериозен атлет.',
      name: 'Мария Петрова',
      role: 'Фитнес ентусиаст',
    },
    {
      quote:
        'Комфортни, издръжливи и осигуряват страхотен захват. Вече не играя без тях.',
      name: 'Михаил Георгиев',
      role: 'Аматьорски футболист',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>Какво казват нашите клиенти</h2>
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

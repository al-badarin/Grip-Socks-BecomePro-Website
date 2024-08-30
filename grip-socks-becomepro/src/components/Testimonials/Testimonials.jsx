import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonials.module.css';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        'Качеството е изключително, и наистина помагат за предотвратяване на пришки и мехури. Препоръчвам ги на всеки сериозен атлет.',
      name: 'Георги Петров',
      role: 'Фитнес ентусиаст',
    },
    {
      quote:
        'Комфортни, издръжливи и осигуряват страхотно сцепление. Изобщо не ми се хлъзга крака в обувката. Вече не играя без тях.',
      name: 'Михаил Георгиев',
      role: 'Аматьорски футболист',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.sectionTitle}>Какво казват нашите клиенти</h2>
      <Slider {...settings} className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.role}>{testimonial.role}</p>
          </div>
        ))}
      </Slider>
      <div className={styles.storySection}>
        <h3 className={styles.storyTitle}>Споделени истории</h3>
        <Slider {...settings} className={styles.storyCarousel}>
          <div>
            <img src="/path-to-your-image/image1.jpg" alt="Client Story 1" />
          </div>
          <div>
            <img src="/path-to-your-image/image2.jpg" alt="Client Story 2" />
          </div>
          <div>
            <img src="/path-to-your-image/image3.jpg" alt="Client Story 3" />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

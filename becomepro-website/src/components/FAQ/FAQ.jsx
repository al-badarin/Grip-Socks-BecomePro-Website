import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'За колко време ще пристигнат моите Grip Socks?',
      answer:
        'Очаквайте Вашата пратка да бъде обработена от 1 до 3 работни дена.',
    },
    {
      question: 'Какви размери предлагате за Grip Socks?',
      answer:
        'Нашите Grip Socks се предлагат в различни размери, от малки до екстра големи, за да паснат на всички размери крака.',
    },
    {
      question: 'Как да се грижа за моите Grip Socks?',
      answer:
        'За най-добри резултати, изперете вашите Grip Socks в студена вода и ги оставете да изсъхнат на въздух. Избягвайте използването на белина или омекотители.',
    },
    {
      question: 'Мога ли да нося тези чорапи за спортове, различни от футбол?',
      answer:
        'Да! Въпреки че нашите Grip Socks са проектирани за футбол, те са универсални и могат да се използват и за други спортове като баскетбол, бягане и други.',
    },
    {
      question: 'Колко чифта Grip Socks трябва да имам?',
      answer:
        'Препоръчваме поне три/пет чифта, за да можете да ги използвате редовно, докато единият се пере.',
    },
    {
      question: 'Grip Socks подходящи ли са за деца?',
      answer:
        'Да, нашите Grip Socks са налични в размери, подходящи за деца и юноши.',
    },
    {
      question: 'Колко време издържат Grip Socks?',
      answer:
        'С правилна грижа, нашите Grip Socks могат да издържат много сезони, без да губят качествата си.',
    },
    {
      question: 'Grip Socks намаляват ли риска от наранявания?',
      answer:
        'Да, нашите Grip Socks осигуряват по-добро сцепление и стабилност, което може да помогне за предотвратяване на наранявания.',
    },
    {
      question: 'Какви са методите за плащане?',
      answer:
        'Приемаме различни методи за плащане, включително по Revolut, банков превод, наложен платеж при вземане от куриер. За повече информация ни пишете на лично в Instagram - @become.pro2024 или на телефон +359 888881476.',
    },
    {
      question: 'Имате ли отстъпки при закупуване на повече от 5/10 чифта?',
      answer:
        'Да, предлагаме отстъпки при закупуване на по-голямо количество. Свържете се с нас за повече информация.',
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.sectionTitle}>Често задавани въпроси</h2>
      <input
        type="text"
        placeholder="Търсене..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.faqContainer}>
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
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
          ))
        ) : (
          <p className={styles.noResults}>Няма намерени резултати.</p>
        )}
      </div>
    </section>
  );
};

export default FAQ;

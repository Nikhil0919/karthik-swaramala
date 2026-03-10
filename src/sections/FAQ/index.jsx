import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_NUMBER } from '../../config/constants';
import './FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            questionKey: 'faq.question1',
            answerKey: 'faq.answer1'
        },
        {
            questionKey: 'faq.question2',
            answerKey: 'faq.answer2'
        },
        {
            questionKey: 'faq.question3',
            answerKey: 'faq.answer3'
        },
        {
            questionKey: 'faq.question4',
            answerKey: 'faq.answer4'
        },
        {
            questionKey: 'faq.question5',
            answerKey: 'faq.answer5'
        },
        {
            questionKey: 'faq.question6',
            answerKey: 'faq.answer6'
        },
        {
            questionKey: 'faq.question7',
            answerKey: 'faq.answer7'
        },
        {
            questionKey: 'faq.question8',
            answerKey: 'faq.answer8'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="faq-container">
                <div className="section-header">
                    <h2 className="section-title">{t('faq.title')}</h2>
                    <p className="section-subtitle">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{t(faq.questionKey)}</h3>
                                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{t(faq.answerKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>{t('faq.stillHaveQuestions')}</p>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn"
                    >
                        {t('faq.contactUsOnWhatsApp')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

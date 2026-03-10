import { useState } from 'react';
import { WHATSAPP_NUMBER } from '../config/constants';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How long does the conversion process take?',
            answer: 'Most conversions are completed within 2-3 business days. For large bulk orders, we may need additional time. We\'ll provide you with an estimated timeline when you place your order.'
        },
        {
            question: 'What condition should my media be in?',
            answer: 'We can work with media in various conditions. However, the quality of the output depends on the condition of the original. Damaged tapes or discs may result in partial data recovery or quality loss.'
        },
        {
            question: 'Do you offer pickup and delivery services?',
            answer: 'Yes! You can choose to drop off your media at our location, or we can arrange pickup and delivery for your convenience. Delivery charges may apply based on your location.'
        },
        {
            question: 'What formats do you deliver the converted files in?',
            answer: 'We provide converted files in widely compatible formats: MP4 for video, MP3 for audio. Files can be delivered on USB drives or via digital delivery methods, depending on your preference.'
        },
        {
            question: 'Is my data secure during the conversion process?',
            answer: 'Absolutely. We treat all customer media with the utmost confidentiality and care. Your files are handled securely throughout the process and are never shared with third parties.'
        },
        {
            question: 'Do you offer bulk discounts?',
            answer: 'Yes! We offer special pricing for bulk orders. Contact us via WhatsApp with details about your order quantity, and we\'ll provide you with a customized quote.'
        },
        {
            question: 'What if my media is damaged or unreadable?',
            answer: 'We have specialized equipment to handle damaged media. While we can\'t guarantee 100% recovery, we\'ll do our best to salvage as much data as possible. You only pay for successful conversions.'
        },
        {
            question: 'Can I get my original media back after conversion?',
            answer: 'Of course! We return all original media to you along with the converted digital files. Your memories are precious, and we ensure they\'re safely returned.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="faq-container">
                <div className="section-header">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Find answers to common questions about our media conversion services
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
                                <h3>{faq.question}</h3>
                                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Still have questions?</p>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn"
                    >
                        Contact Us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

import { useTranslation } from 'react-i18next';
import { WHATSAPP_NUMBER } from '../../config/constants';
import './FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();

    return (
        <section id="faq" className="faq-section">
            <div className="faq-container">
                <div className="section-header">
                    <h2 className="section-title">{t('faq.title')}</h2>
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

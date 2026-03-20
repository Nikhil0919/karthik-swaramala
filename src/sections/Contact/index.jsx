import { useTranslation } from 'react-i18next';
import { WHATSAPP_NUMBER } from '../../config/constants';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const businessAddress = "Sree Karthik Swaramala, Durgaiah Street, Near Rajtowers Hotel, Governor Peta, Eluru Road, Vijayawada";

    const handleGetDirections = () => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="section-subtitle">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h4>{t('contact.visitUs')}</h4>
                                <p style={{ whiteSpace: 'pre-line' }}>{t('contact.address')}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-text">
                                <h4>{t('contact.callUs')}</h4>
                                <p style={{ whiteSpace: 'pre-line' }}>{t('contact.phoneTime')}</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🎵</div>
                            <div className="info-text">
                                <h4>{t('contact.ourServices')}</h4>
                                <p style={{ whiteSpace: 'pre-line' }}>{t('contact.servicesText')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            title="Business Location"
                            src="https://www.google.com/maps/embed?pb=!4v1773312103997!6m8!1m7!1sOJXNtaYHTAAUlPu8ltPTzg!2m2!1d16.51370951379509!2d80.62882711272167!3f98.9294223328079!4f6.835785638494073!5f0.8885892086822504"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '15px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <button className="directions-btn" onClick={handleGetDirections}>
                            📍 {t('contact.getDirections')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

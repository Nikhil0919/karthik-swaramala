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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4893!2d80.6204!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzcnMTMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
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

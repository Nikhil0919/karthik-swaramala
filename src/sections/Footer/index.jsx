import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-icon">📼</span>
                            <span className="logo-text">{t('footer.brandName')}</span>
                        </div>
                        <p className="footer-description">
                            {t('footer.description')}
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="YouTube">📹</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer.quickLinks')}</h4>
                        <ul className="footer-links">
                            <li onClick={() => scrollToSection('services')}>{t('footer.services')}</li>
                            <li onClick={() => scrollToSection('how-it-works')}>{t('footer.howItWorks')}</li>
                            <li onClick={() => scrollToSection('faq')}>{t('footer.faq')}</li>
                            <li onClick={() => scrollToSection('contact')}>{t('footer.contact')}</li>
                            <li onClick={() => scrollToSection('order')}>{t('footer.orderNow')}</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer.ourServices')}</h4>
                        <ul className="footer-links">
                            <li>{t('footer.cdToPendrive')}</li>
                            <li>{t('footer.vcrToDigital')}</li>
                            <li>{t('footer.audioCassetteConversion')}</li>
                            <li>{t('footer.negativeToPhoto')}</li>
                            <li>{t('footer.voiceRecording')}</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer.contactInfo')}</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📍</span>
                                <span style={{ whiteSpace: 'pre-line' }}>{t('footer.address')}</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                {t('footer.phone')}
                            </li>
                            <li>
                                <span className="contact-icon">💬</span>
                                {t('footer.whatsappAvailable')}
                            </li>
                            <li>
                                <span className="contact-icon">🕒</span>
                                {t('footer.businessHours')}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} {t('footer.brandName')}. {t('footer.allRightsReserved')}</p>
                    <div className="footer-bottom-links">
                        <a href="#">{t('footer.privacyPolicy')}</a>
                        <span>•</span>
                        <a href="#">{t('footer.termsOfService')}</a>
                        <span>•</span>
                        <a href="#">{t('footer.cookiePolicy')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

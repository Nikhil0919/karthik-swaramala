import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
                    <span className="logo-icon">📼</span>
                    <span className="logo-text">{t('navbar.brandName')}</span>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToSection('services')}>{t('navbar.services')}</li>
                    <li onClick={() => scrollToSection('how-it-works')}>{t('navbar.howItWorks')}</li>
                    <li onClick={() => scrollToSection('faq')}>{t('navbar.faq')}</li>
                    <li onClick={() => scrollToSection('contact')}>{t('navbar.contact')}</li>
                    <li className="language-switcher">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={i18n.language === 'en' ? 'active' : ''}
                        >
                            English
                        </button>
                        <span className="separator">|</span>
                        <button
                            onClick={() => changeLanguage('te')}
                            className={i18n.language === 'te' ? 'active' : ''}
                        >
                            తెలుగు
                        </button>
                    </li>
                    <li className="cta-item">
                        <button
                            className="cta-button"
                            onClick={() => scrollToSection('order')}
                        >
                            {t('navbar.orderNow')}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

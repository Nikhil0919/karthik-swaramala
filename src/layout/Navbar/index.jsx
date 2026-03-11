import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        // Keep this in the same order as sections rendered in App.jsx.
        const sectionIds = ['hero', 'services', 'how-it-works', 'order', 'faq', 'contact'];

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollPosition = window.scrollY + 120;
            let currentSection = 'hero';

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section && scrollPosition >= section.offsetTop) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
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
                    <li
                        className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
                        onClick={() => scrollToSection('services')}
                    >
                        {t('navbar.services')}
                    </li>
                    <li
                        className={`nav-item ${activeSection === 'how-it-works' ? 'active' : ''}`}
                        onClick={() => scrollToSection('how-it-works')}
                    >
                        {t('navbar.howItWorks')}
                    </li>
                    <li
                        className={`nav-item ${activeSection === 'faq' ? 'active' : ''}`}
                        onClick={() => scrollToSection('faq')}
                    >
                        {t('navbar.faq')}
                    </li>
                    <li
                        className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => scrollToSection('contact')}
                    >
                        {t('navbar.contact')}
                    </li>
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

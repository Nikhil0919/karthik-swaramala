import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
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

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
                    <span className="logo-icon">📼</span>
                    <span className="logo-text">Sree Karthik Swaramala</span>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToSection('services')}>Services</li>
                    <li onClick={() => scrollToSection('how-it-works')}>How It Works</li>
                    <li onClick={() => scrollToSection('faq')}>FAQ</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                    <li className="cta-item">
                        <button
                            className="cta-button"
                            onClick={() => scrollToSection('order')}
                        >
                            Order Now
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

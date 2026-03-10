import './Footer.css';

const Footer = () => {
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
                            <span className="logo-text">Sree Karthik Swaramala</span>
                        </div>
                        <p className="footer-description">
                            Professional media conversion services for preserving your precious memories.
                            Transform cassettes, CDs, and video tapes to digital with care and quality.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="YouTube">📹</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li onClick={() => scrollToSection('services')}>Services</li>
                            <li onClick={() => scrollToSection('how-it-works')}>How It Works</li>
                            <li onClick={() => scrollToSection('faq')}>FAQ</li>
                            <li onClick={() => scrollToSection('contact')}>Contact</li>
                            <li onClick={() => scrollToSection('order')}>Order Now</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Our Services</h4>
                        <ul className="footer-links">
                            <li>CD to Pendrive</li>
                            <li>VCR Cassette to Digital</li>
                            <li>Audio Cassette Conversion</li>
                            <li>Old Negative to Photo Print</li>
                            <li>Voice Recording Services</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📍</span>
                                Durgaiah Street, Near Rajtowers Hotel,<br />Governor Peta, Vijayawada
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                8499009004
                            </li>
                            <li>
                                <span className="contact-icon">💬</span>
                                WhatsApp Available
                            </li>
                            <li>
                                <span className="contact-icon">🕒</span>
                                Mon-Sat: 10 AM - 7 PM
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Sree Karthik Swaramala. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                        <span>•</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    
    const scrollToOrder = () => {
        const element = document.getElementById('order');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {t('hero.title')} <span className="highlight">{t('hero.titleHighlight')}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <div className="hero-features">
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{t('hero.feature1')}</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{t('hero.feature2')}</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>{t('hero.feature3')}</span>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <button className="primary-btn" onClick={scrollToOrder}>
                            {t('hero.ctaButton')}
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="media-icons">
                        <div className="media-icon">📼</div>
                        <div className="media-icon">💿</div>
                        <div className="media-icon">📀</div>
                        <div className="media-icon">📱</div>
                    </div>
                </div>
            </div>
            <div className="hero-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="#f9fafb"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;

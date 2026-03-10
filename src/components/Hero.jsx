import './Hero.css';

const Hero = () => {
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
                        Preserve Your <span className="highlight">Precious Memories</span>
                    </h1>
                    <p className="hero-subtitle">
                        Transform your cassettes, CDs, and video tapes to pendrive. Old negative to photo prints.
                        Voice recording services, courier available. Electronics and audio accessories sales.
                    </p>
                    <div className="hero-features">
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>High Quality Conversion</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>Courier Available</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✓</span>
                            <span>Electronics Sales</span>
                        </div>
                    </div>
                    <div className="hero-cta">
                        <button className="primary-btn" onClick={scrollToOrder}>
                            Start Converting
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

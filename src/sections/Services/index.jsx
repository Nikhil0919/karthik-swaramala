import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();
    
    const services = [
        {
            icon: '💿',
            titleKey: 'services.service1.title',
            descriptionKey: 'services.service1.description',
            formatKey: 'services.service1.format'
        },
        {
            icon: '📼',
            titleKey: 'services.service2.title',
            descriptionKey: 'services.service2.description',
            formatKey: 'services.service2.format'
        },
        {
            icon: '🎥',
            titleKey: 'services.service3.title',
            descriptionKey: 'services.service3.description',
            formatKey: 'services.service3.format'
        },
        {
            icon: '📻',
            titleKey: 'services.service4.title',
            descriptionKey: 'services.service4.description',
            formatKey: 'services.service4.format'
        },
        {
            icon: '📷',
            titleKey: 'services.service5.title',
            descriptionKey: 'services.service5.description',
            formatKey: 'services.service5.format'
        },
        {
            icon: '🎤',
            titleKey: 'services.service6.title',
            descriptionKey: 'services.service6.description',
            formatKey: 'services.service6.format'
        },
        {
            icon: '🎵',
            titleKey: 'services.service7.title',
            descriptionKey: 'services.service7.description',
            formatKey: 'services.service7.format'
        },
        {
            icon: '📦',
            titleKey: 'services.service8.title',
            descriptionKey: 'services.service8.description',
            formatKey: 'services.service8.format'
        },
        {
            icon: '🛒',
            titleKey: 'services.service9.title',
            descriptionKey: 'services.service9.description',
            formatKey: 'services.service9.format'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="services-container">
                <div className="section-header">
                    <h2 className="section-title">{t('services.title')}</h2>
                    <p className="section-subtitle">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{t(service.titleKey)}</h3>
                            <p className="service-description">{t(service.descriptionKey)}</p>
                            <div className="service-formats">
                                <span className="format-badge">{t(service.formatKey)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

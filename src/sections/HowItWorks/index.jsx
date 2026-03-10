import { useTranslation } from 'react-i18next';
import './HowItWorks.css';

const HowItWorks = () => {
    const { t } = useTranslation();
    
    const steps = [
        {
            number: '1',
            titleKey: 'howItWorks.step1.title',
            descriptionKey: 'howItWorks.step1.description',
            icon: '📱'
        },
        {
            number: '2',
            titleKey: 'howItWorks.step2.title',
            descriptionKey: 'howItWorks.step2.description',
            icon: '📋'
        },
        {
            number: '3',
            titleKey: 'howItWorks.step3.title',
            descriptionKey: 'howItWorks.step3.description',
            icon: '📦'
        },
        {
            number: '4',
            titleKey: 'howItWorks.step4.title',
            descriptionKey: 'howItWorks.step4.description',
            icon: '⚙️'
        },
        {
            number: '5',
            titleKey: 'howItWorks.step5.title',
            descriptionKey: 'howItWorks.step5.description',
            icon: '✅'
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="how-it-works-container">
                <div className="section-header">
                    <h2 className="section-title">{t('howItWorks.title')}</h2>
                    <p className="section-subtitle">
                        {t('howItWorks.subtitle')}
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{t(step.titleKey)}</h3>
                                <p className="step-description">{t(step.descriptionKey)}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

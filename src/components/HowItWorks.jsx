import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Choose Your Media',
            description: 'Select the type of media you want to convert and your preferred output format.',
            icon: '📱'
        },
        {
            number: '2',
            title: 'Place Your Order',
            description: 'Fill out our simple order form and send your request directly via WhatsApp.',
            icon: '📋'
        },
        {
            number: '3',
            title: 'Drop Off Media',
            description: 'Bring your tapes, CDs, or DVDs to our location or arrange for pickup.',
            icon: '📦'
        },
        {
            number: '4',
            title: 'We Convert',
            description: 'Our expert team carefully converts your media to high-quality digital format.',
            icon: '⚙️'
        },
        {
            number: '5',
            title: 'Get Your Files',
            description: 'Receive your converted files on USB drive or via digital delivery.',
            icon: '✅'
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="how-it-works-container">
                <div className="section-header">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">
                        Simple, fast, and hassle-free media conversion in 5 easy steps
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
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

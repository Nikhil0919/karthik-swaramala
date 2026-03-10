import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '�',
            title: 'CD to Pendrive',
            description: 'Convert your CDs to pendrive for easy access and sharing.',
            formats: ['Pendrive']
        },
        {
            icon: '📼',
            title: 'VCR Cassette Marriage to Pendrive',
            description: 'Preserve your precious wedding memories by converting VCR cassettes to pendrive.',
            formats: ['Pendrive']
        },
        {
            icon: '🎥',
            title: 'Handy Cam Cassette to Pendrive',
            description: 'Transfer your handy cam cassette recordings to pendrive format.',
            formats: ['Pendrive']
        },
        {
            icon: '📻',
            title: 'Audio Cassette to Pendrive',
            description: 'Transform tape recorder and audio cassettes into digital audio files on pendrive.',
            formats: ['Pendrive']
        },
        {
            icon: '📷',
            title: 'Old Negative to Photo Print',
            description: 'Get high-quality photo prints from your old negatives.',
            formats: ['Photo Print']
        },
        {
            icon: '🎤',
            title: 'Mic Publicity Voice Recording',
            description: 'Professional voice recording services for elections, schools, temples, and business announcements.',
            formats: ['Custom']
        },
        {
            icon: '🎵',
            title: 'Gramophone Record Sales',
            description: 'Buy and sell vintage gramophone records.',
            formats: ['Sales']
        },
        {
            icon: '📦',
            title: 'Cassette Sales',
            description: 'Empty audio cassettes and company cassettes available for purchase.',
            formats: ['Sales']
        },
        {
            icon: '🛒',
            title: 'Electronics & Accessories Sales',
            description: 'Pendrives, empty CDs, speakers, audio deck & amplifier, pens, and Walkman available for sale.',
            formats: ['Sales']
        }
    ];

    return (
        <section id="services" className="services">
            <div className="services-container">
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Professional media conversion services for all your analog and digital media
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-formats">
                                {service.formats.map((format, idx) => (
                                    <span key={idx} className="format-badge">{format}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

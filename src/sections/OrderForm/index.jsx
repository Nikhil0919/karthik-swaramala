import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_NUMBER, MEDIA_TYPES, OUTPUT_FORMATS } from '../../config/constants';
import './OrderForm.css';

const OrderForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        mediaType: '',
        outputFormat: '',
        quantity: '1',
        delivery: 'pickup',
        notes: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

        // Reset output format if media type changes
        if (name === 'mediaType') {
            setFormData(prev => ({ ...prev, outputFormat: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t('orderForm.nameRequired');
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t('orderForm.phoneRequired');
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = t('orderForm.phoneInvalid');
        }

        if (!formData.mediaType) {
            newErrors.mediaType = t('orderForm.mediaTypeRequired');
        }

        if (!formData.outputFormat) {
            newErrors.outputFormat = t('orderForm.outputFormatRequired');
        }

        if (!formData.quantity || formData.quantity < 1) {
            newErrors.quantity = t('orderForm.quantityInvalid');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        // Generate WhatsApp message
        const message = `
🎬 *${t('orderForm.whatsappMessage.title')}*

👤 *${t('orderForm.whatsappMessage.name')}* ${formData.name}
📱 *${t('orderForm.whatsappMessage.phone')}* ${formData.phone}
📼 *${t('orderForm.whatsappMessage.mediaType')}* ${formData.mediaType}
💾 *${t('orderForm.whatsappMessage.outputFormat')}* ${formData.outputFormat}
📦 *${t('orderForm.whatsappMessage.quantity')}* ${formData.quantity} ${t('orderForm.whatsappMessage.items')}
🚚 *${t('orderForm.whatsappMessage.deliveryMethod')}* ${formData.delivery === 'pickup' ? t('orderForm.whatsappMessage.pickupFromStore') : t('orderForm.whatsappMessage.homeDelivery')}
${formData.notes ? `\n📝 *${t('orderForm.whatsappMessage.notes')}* ${formData.notes}` : ''}

${t('orderForm.whatsappMessage.thankYou')}
    `.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Optional: Reset form after submission
        // setFormData({
        //   name: '',
        //   phone: '',
        //   mediaType: '',
        //   outputFormat: '',
        //   quantity: '1',
        //   delivery: 'pickup',
        //   notes: ''
        // });
    };

    const availableOutputs = formData.mediaType
        ? OUTPUT_FORMATS[formData.mediaType] || []
        : [];

    return (
        <section id="order" className="order-form-section">
            <div className="order-container">
                <div className="section-header">
                    <h2 className="section-title">{t('orderForm.title')}</h2>
                    <p className="section-subtitle">
                        {t('orderForm.subtitle')}
                    </p>
                </div>

                <div className="form-content">
                    <div className="form-side">
                        <form onSubmit={handleSubmit} className="order-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">{t('orderForm.fullName')} *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder={t('orderForm.namePlaceholder')}
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">{t('orderForm.phoneNumber')} *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? 'error' : ''}
                                        placeholder={t('orderForm.phonePlaceholder')}
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="mediaType">{t('orderForm.mediaType')} *</label>
                                    <select
                                        id="mediaType"
                                        name="mediaType"
                                        value={formData.mediaType}
                                        onChange={handleChange}
                                        className={errors.mediaType ? 'error' : ''}
                                    >
                                        <option value="">{t('orderForm.selectMediaType')}</option>
                                        {MEDIA_TYPES.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    {errors.mediaType && <span className="error-message">{errors.mediaType}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="outputFormat">{t('orderForm.outputFormat')} *</label>
                                    <select
                                        id="outputFormat"
                                        name="outputFormat"
                                        value={formData.outputFormat}
                                        onChange={handleChange}
                                        className={errors.outputFormat ? 'error' : ''}
                                        disabled={!formData.mediaType}
                                    >
                                        <option value="">{t('orderForm.selectOutputFormat')}</option>
                                        {availableOutputs.map(format => (
                                            <option key={format} value={format}>{format}</option>
                                        ))}
                                    </select>
                                    {errors.outputFormat && <span className="error-message">{errors.outputFormat}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="quantity">{t('orderForm.quantity')} *</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        min="1"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className={errors.quantity ? 'error' : ''}
                                    />
                                    {errors.quantity && <span className="error-message">{errors.quantity}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="delivery">{t('orderForm.deliveryMethod')} *</label>
                                    <select
                                        id="delivery"
                                        name="delivery"
                                        value={formData.delivery}
                                        onChange={handleChange}
                                    >
                                        <option value="pickup">{t('orderForm.pickupFromStore')}</option>
                                        <option value="delivery">{t('orderForm.homeDelivery')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">{t('orderForm.additionalNotes')}</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder={t('orderForm.notesPlaceholder')}
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span className="btn-icon">💬</span>
                                {t('orderForm.submitButton')}
                            </button>
                        </form>
                    </div>

                    <div className="info-side">
                        <div className="info-box">
                            <h3>📱 {t('orderForm.infoBox1Title')}</h3>
                            <p>{t('orderForm.infoBox1Text')}</p>
                        </div>

                        <div className="info-box">
                            <h3>⚡ {t('orderForm.infoBox2Title')}</h3>
                            <p>{t('orderForm.infoBox2Text')}</p>
                        </div>

                        <div className="info-box">
                            <h3>🔒 {t('orderForm.infoBox3Title')}</h3>
                            <p>{t('orderForm.infoBox3Text')}</p>
                        </div>

                        <div className="info-box">
                            <h3>💡 {t('orderForm.infoBox4Title')}</h3>
                            <p>{t('orderForm.infoBox4Text')}</p>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chat-link"
                            >
                                Start Chat →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-whatsapp"
                aria-label="Chat on WhatsApp"
            >
                <span className="whatsapp-icon">💬</span>
            </a>
        </section>
    );
};

export default OrderForm;

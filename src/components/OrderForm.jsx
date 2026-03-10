import { useState } from 'react';
import { WHATSAPP_NUMBER, MEDIA_TYPES, OUTPUT_FORMATS } from '../config/constants';
import './OrderForm.css';

const OrderForm = () => {
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
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.mediaType) {
            newErrors.mediaType = 'Please select media type';
        }

        if (!formData.outputFormat) {
            newErrors.outputFormat = 'Please select output format';
        }

        if (!formData.quantity || formData.quantity < 1) {
            newErrors.quantity = 'Quantity must be at least 1';
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
🎬 *New Media Conversion Request*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📼 *Media Type:* ${formData.mediaType}
💾 *Output Format:* ${formData.outputFormat}
📦 *Quantity:* ${formData.quantity} item(s)
🚚 *Delivery Method:* ${formData.delivery === 'pickup' ? 'Pickup from store' : 'Home delivery'}
${formData.notes ? `\n📝 *Notes:* ${formData.notes}` : ''}

Thank you! Looking forward to your service.
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
                    <h2 className="section-title">Place Your Order</h2>
                    <p className="section-subtitle">
                        Fill out the form below and send your order directly via WhatsApp
                    </p>
                </div>

                <div className="form-content">
                    <div className="form-side">
                        <form onSubmit={handleSubmit} className="order-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? 'error' : ''}
                                        placeholder="10-digit mobile number"
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="mediaType">Media Type *</label>
                                    <select
                                        id="mediaType"
                                        name="mediaType"
                                        value={formData.mediaType}
                                        onChange={handleChange}
                                        className={errors.mediaType ? 'error' : ''}
                                    >
                                        <option value="">Select media type</option>
                                        {MEDIA_TYPES.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    {errors.mediaType && <span className="error-message">{errors.mediaType}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="outputFormat">Output Format *</label>
                                    <select
                                        id="outputFormat"
                                        name="outputFormat"
                                        value={formData.outputFormat}
                                        onChange={handleChange}
                                        className={errors.outputFormat ? 'error' : ''}
                                        disabled={!formData.mediaType}
                                    >
                                        <option value="">Select output format</option>
                                        {availableOutputs.map(format => (
                                            <option key={format} value={format}>{format}</option>
                                        ))}
                                    </select>
                                    {errors.outputFormat && <span className="error-message">{errors.outputFormat}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="quantity">Quantity *</label>
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
                                    <label htmlFor="delivery">Delivery Method *</label>
                                    <select
                                        id="delivery"
                                        name="delivery"
                                        value={formData.delivery}
                                        onChange={handleChange}
                                    >
                                        <option value="pickup">Pickup from store</option>
                                        <option value="delivery">Home delivery</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Additional Notes (Optional)</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Any special instructions or requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span className="btn-icon">💬</span>
                                Send Order via WhatsApp
                            </button>
                        </form>
                    </div>

                    <div className="info-side">
                        <div className="info-box">
                            <h3>📱 Quick & Easy Ordering</h3>
                            <p>Your order details will be sent directly to our WhatsApp for instant processing.</p>
                        </div>

                        <div className="info-box">
                            <h3>⚡ Fast Response</h3>
                            <p>We typically respond within 30 minutes during business hours.</p>
                        </div>

                        <div className="info-box">
                            <h3>🔒 Secure & Private</h3>
                            <p>Your information is only shared via WhatsApp and kept confidential.</p>
                        </div>

                        <div className="info-box">
                            <h3>💡 Need Help?</h3>
                            <p>Contact us directly on WhatsApp if you have any questions before ordering.</p>
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

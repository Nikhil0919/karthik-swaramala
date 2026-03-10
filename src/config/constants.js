// Application constants

// WhatsApp contact number (with country code)
export const WHATSAPP_NUMBER = '918499009004';

// Available media types for conversion
export const MEDIA_TYPES = [
    'CD',
    'VCR Cassette',
    'Handy Cam Cassette',
    'Audio Cassette',
    'Old Negative',
    'Memory Card',
    'Other'
];

// Output formats available for each media type
export const OUTPUT_FORMATS = {
    'CD': ['Pendrive', 'Memory Card'],
    'VCR Cassette': ['Pendrive', 'Memory Card'],
    'Handy Cam Cassette': ['Pendrive', 'Memory Card'],
    'Audio Cassette': ['Pendrive', 'Memory Card'],
    'Old Negative': ['Photo Print', 'Digital Copy'],
    'Memory Card': ['Pendrive', 'Digital Copy'],
    'Other': ['Pendrive', 'Photo Print', 'Digital Copy']
};

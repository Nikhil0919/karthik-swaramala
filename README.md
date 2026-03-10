# 📼 Media Conversion Shop - React Frontend

A complete, modern React frontend website for a local media conversion shop that converts old media formats (VHS, VCR tapes, cassette tapes, CDs, DVDs) into modern digital formats (USB/pendrive, MP4, MP3).

## ✨ Features

- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **🎯 Interactive Pricing Selector** - Unique semicircular wheel interface for selecting media types and output formats
- **💬 WhatsApp Integration** - Orders sent directly to admin via WhatsApp
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and optimized production builds
- **♿ Accessible** - WCAG compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "shop react"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Sticky navigation bar
│   ├── Hero.jsx                # Hero section with CTA
│   ├── Services.jsx            # Services showcase
│   ├── HowItWorks.jsx          # Process explanation
│   ├── PricingSelector.jsx     # Main pricing component
│   ├── SemiCircleWheel.jsx     # Reusable wheel component
│   ├── PriceDisplay.jsx        # Price display component
│   ├── OrderForm.jsx           # WhatsApp order form
│   ├── FAQ.jsx                 # Frequently asked questions
│   ├── Contact.jsx             # Contact information
│   └── Footer.jsx              # Footer with links
├── config/
│   └── pricing.js              # Pricing configuration
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## ⚙️ Configuration

### Update WhatsApp Number

Edit the WhatsApp admin number in [src/config/pricing.js](src/config/pricing.js#L15):

```javascript
export const WHATSAPP_NUMBER = '1234567890'; // Replace with actual number
```

**Important:** Use the format: country code + number (no + symbol or spaces)
- Example for India: `919876543210`
- Example for US: `15551234567`

### Update Pricing

Modify prices in [src/config/pricing.js](src/config/pricing.js#L2):

```javascript
export const PRICING_MAP = {
  VHS: { USB: 500, MP4: 450 },
  Cassette: { MP3: 300, USB: 350 },
  CD: { USB: 200, MP3: 150 },
  DVD: { MP4: 250, USB: 300 }
};
```

### Update Business Information

Update contact details in [src/components/Contact.jsx](src/components/Contact.jsx):
- Address
- Phone number
- Email
- Business hours

Update footer information in [src/components/Footer.jsx](src/components/Footer.jsx)

## 🎨 Customization

### Colors

Global colors are defined in [src/index.css](src/index.css) using CSS variables:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --success-gradient: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  /* ... more colors */
}
```

### Fonts

Change the font family in [src/index.css](src/index.css):

```css
:root {
  font-family: 'Your-Font-Family', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Services

Add or modify services in [src/components/Services.jsx](src/components/Services.jsx#L4):

```javascript
const services = [
  {
    icon: '📼',
    title: 'Your Service',
    description: 'Service description',
    formats: ['Format1', 'Format2']
  },
  // ... more services
];
```

## 🎯 Key Features Explained

### Interactive Pricing Selector

The pricing selector uses two semicircular wheels:
- **Left wheel:** Select media type (VHS, Cassette, CD, DVD)
- **Right wheel:** Select output format (USB, MP4, MP3)
- **Center display:** Shows estimated price

The wheels are implemented with:
- Smooth CSS transforms
- Dynamic positioning calculations
- Responsive design for mobile devices

### WhatsApp Integration

Orders are sent via WhatsApp using the `wa.me` API:

1. User fills out the form
2. Data is validated
3. A formatted message is generated
4. User is redirected to WhatsApp with pre-filled message
5. Opens in new tab for seamless experience

### Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 1024px
- Touch-friendly UI elements
- Collapsible mobile navigation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Tech Stack

- **React 19.2** - UI library
- **Vite 7.3** - Build tool
- **CSS3** - Styling (no framework dependencies)
- **WhatsApp Business API** - Order integration

## 📝 To-Do / Future Enhancements

- [ ] Add Google Maps integration for location
- [ ] Implement image gallery for before/after samples
- [ ] Add customer testimonials section
- [ ] Integrate analytics (Google Analytics, etc.)
- [ ] Add live chat widget
- [ ] Create blog section for SEO
- [ ] Add multi-language support
- [ ] Implement dark mode toggle

## 🤝 Contributing

This is a custom project for a local media conversion shop. For modifications or enhancements:

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Document your changes

## 📄 License

Custom project - All rights reserved

## 💡 Tips for Going Live

1. **Update All Content:**
   - Replace placeholder text with actual business information
   - Update WhatsApp number
   - Add real pricing
   - Update contact details

2. **Optimize for Production:**
   - Run `npm run build`
   - Test the production build with `npm run preview`
   - Check all links and forms

3. **SEO Optimization:**
   - Update `index.html` meta tags
   - Add Open Graph tags
   - Create sitemap
   - Submit to Google Search Console

4. **Deploy:**
   - Choose a hosting platform (Netlify, Vercel, GitHub Pages, etc.)
   - Configure custom domain
   - Enable HTTPS
   - Set up CDN for optimal performance

5. **Analytics:**
   - Add Google Analytics
   - Set up conversion tracking
   - Monitor WhatsApp click-through rates

## 🆘 Support

For issues or questions:
- Check browser console for errors
- Verify WhatsApp number format
- Ensure all dependencies are installed
- Test in different browsers

## 📞 Contact

For technical support or customization requests, contact the developer.

---

**Built with ❤️ for preserving precious memories**

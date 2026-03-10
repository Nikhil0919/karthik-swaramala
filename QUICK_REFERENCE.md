# ⚡ Quick Reference Guide

Essential commands and configurations at a glance.

---

## 🚀 Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Build for production
npm run preview         # Preview production build

# Deployment
vercel                  # Deploy to Vercel
netlify deploy          # Deploy to Netlify
npm run deploy          # Deploy to GitHub Pages (after setup)
```

---

## 📝 Must-Change Before Going Live

### 1. WhatsApp Number
**File:** `src/config/pricing.js` **Line 15**
```javascript
export const WHATSAPP_NUMBER = '919876543210'; // ⚠️ CHANGE THIS
```

### 2. Business Name
**File:** `src/components/Navbar.jsx` **Line 30**
```javascript
<span className="logo-text">MediaConvert</span> // Change to your name
```

**File:** `src/components/Footer.jsx` **Line 18**
```javascript
<span className="logo-text">MediaConvert</span> // Change here too
```

### 3. Contact Information
**File:** `src/components/Contact.jsx` **Lines 22-47**
```javascript
// Update address, phone, email, hours
```

**File:** `src/components/Footer.jsx` **Lines 60-75**
```javascript
// Update footer contact info
```

### 4. Website Title
**File:** `index.html` **Line 7**
```html
<title>Your Shop Name - Media Conversion Services</title>
```

---

## 💰 Pricing Configuration

**File:** `src/config/pricing.js`

### Update Prices
```javascript
export const PRICING_MAP = {
  VHS: { USB: 500, MP4: 450 },
  Cassette: { MP3: 300, USB: 350 },
  CD: { USB: 200, MP3: 150 },
  DVD: { MP4: 250, USB: 300 }
};
```

### Add New Media Type
```javascript
// 1. Add to pricing map
export const PRICING_MAP = {
  VHS: { USB: 500, MP4: 450 },
  'New Type': { USB: 600, MP4: 550 }, // Add here
  // ...
};

// 2. Add to media types array
export const MEDIA_TYPES = ['VHS', 'Cassette', 'CD', 'DVD', 'New Type'];

// 3. Add to output formats
export const OUTPUT_FORMATS = {
  VHS: ['USB', 'MP4'],
  'New Type': ['USB', 'MP4'], // Add here
  // ...
};
```

---

## 🎨 Colors

**File:** `src/index.css` **Lines 11-13**

```css
:root {
  /* Main brand color (purple gradient) */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* WhatsApp button (green - usually keep as is) */
  --success-gradient: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
}
```

**Popular alternatives:**
```css
/* Blue */
--primary-gradient: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);

/* Green */
--primary-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);

/* Orange/Red */
--primary-gradient: linear-gradient(135deg, #f97316 0%, #dc2626 100%);
```

---

## 📱 Social Media Links

**File:** `src/components/Footer.jsx` **Lines 24-29**

```javascript
<div className="social-links">
  <a href="https://facebook.com/yourpage">📘</a>
  <a href="https://instagram.com/yourprofile">📷</a>
  <a href="https://twitter.com/yourhandle">🐦</a>
  <a href="https://youtube.com/yourchannel">📹</a>
</div>
```

---

## 🗺️ Google Maps

**File:** `src/components/Contact.jsx` **Lines 56-61**

Replace the `.map-placeholder` div with:

```javascript
<div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '15px' }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
```

**Get embed code:**
1. Google Maps → Your location
2. Share → Embed a map
3. Copy iframe src

---

## 📊 Analytics

**File:** `index.html` **Add before `</head>`**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## ✍️ Content Updates

### Services Section
**File:** `src/components/Services.jsx` **Lines 5-30**

```javascript
const services = [
  {
    icon: '📼',
    title: 'Service Title',
    description: 'Service description...',
    formats: ['Format1', 'Format2']
  },
  // Add more...
];
```

### FAQ Section
**File:** `src/components/FAQ.jsx` **Lines 7-48**

```javascript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...'
  },
  // Add more...
];
```

### How It Works
**File:** `src/components/HowItWorks.jsx` **Lines 6-32**

```javascript
const steps = [
  {
    number: '1',
    title: 'Step Title',
    description: 'Description...',
    icon: '📱'
  },
  // Add more...
];
```

---

## 🔧 Common Fixes

### WhatsApp not working?
✅ Check number format: `919876543210` (no +, no spaces)  
✅ Must include country code  
✅ File: `src/config/pricing.js` line 15

### Pricing not updating?
✅ Clear browser cache (Ctrl+F5)  
✅ Check `src/config/pricing.js`  
✅ Restart dev server

### Changes not showing?
✅ Hard refresh browser (Ctrl+F5)  
✅ Check for console errors (F12)  
✅ Restart `npm run dev`

### Build errors?
✅ Delete `node_modules` and `package-lock.json`  
✅ Run `npm install` again  
✅ Check for syntax errors in `.jsx` files

---

## 📂 Important Files Location

```
PROJECT ROOT/
├── index.html                    # Website title, meta tags
├── src/
│   ├── index.css                 # Colors, fonts, global styles
│   ├── config/
│   │   └── pricing.js            # WhatsApp, prices ⚠️
│   └── components/
│       ├── Navbar.jsx            # Business name, navigation
│       ├── Hero.jsx              # Main headline, CTA
│       ├── Services.jsx          # Service cards
│       ├── HowItWorks.jsx        # Process steps
│       ├── PricingSelector.jsx   # Pricing UI
│       ├── OrderForm.jsx         # Order form
│       ├── FAQ.jsx               # Questions & answers
│       ├── Contact.jsx           # Contact info, map
│       └── Footer.jsx            # Footer, social links
```

---

## 🚀 Deployment Quick Start

### Vercel (Easiest)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify (Drag & Drop)
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

### GitHub Pages
```bash
# Add to package.json:
"homepage": "https://username.github.io/repo-name"

npm install --save-dev gh-pages
npm run deploy
```

---

## 🧪 Testing Checklist

Before going live:
- [ ] Update WhatsApp number
- [ ] Update business name
- [ ] Update contact information
- [ ] Update pricing
- [ ] Test WhatsApp integration
- [ ] Test on mobile
- [ ] Test all navigation links
- [ ] Check for console errors
- [ ] Test form submission
- [ ] Verify all text content
- [ ] Check social media links
- [ ] Build production version
- [ ] Test production build

---

## 📞 WhatsApp Number Format Examples

| Country | Format | Example |
|---------|--------|---------|
| India | 91XXXXXXXXXX | 919876543210 |
| USA | 1XXXXXXXXXX | 15551234567 |
| UK | 44XXXXXXXXXX | 447911123456 |
| UAE | 971XXXXXXXXX | 971501234567 |

---

## 💡 Pro Tips

1. **Test WhatsApp first** - Most important feature
2. **Mobile-first** - Most visitors use phones
3. **Update prices regularly** - Keep them current
4. **Monitor analytics** - See what works
5. **Fast response** - Reply to WhatsApp quickly
6. **Clear photos** - Add before/after samples
7. **Customer testimonials** - Build trust
8. **Local SEO** - Use city name in content

---

## 🆘 Emergency Fixes

### Site Down?
```bash
# Check dev server
npm run dev

# If that fails, reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### WhatsApp Opens Wrong Number?
**File:** `src/config/pricing.js` line 15
- No + symbol
- No spaces or dashes
- Include country code

### Prices Wrong?
**File:** `src/config/pricing.js` lines 2-7
- Update PRICING_MAP object
- Clear browser cache
- Rebuild: `npm run build`

---

## 📚 Learn More

- **React:** [react.dev](https://react.dev)
- **Vite:** [vitejs.dev](https://vitejs.dev)
- **CSS:** [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **WhatsApp API:** [wa.me format](https://faq.whatsapp.com/5913398998672934)

---

**Keep this file handy for quick reference! 📌**
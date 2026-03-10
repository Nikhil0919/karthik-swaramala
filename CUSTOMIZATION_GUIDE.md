# 🎨 Customization Guide

This guide will help you customize the Media Conversion Shop website to match your business needs.

## 📋 Table of Contents

1. [Essential Changes](#essential-changes)
2. [Branding](#branding)
3. [Content Updates](#content-updates)
4. [Styling](#styling)
5. [Adding Features](#adding-features)

---

## Essential Changes

### 1. Update WhatsApp Number (REQUIRED ⚠️)

**File:** `src/config/pricing.js`

```javascript
// Line 15
export const WHATSAPP_NUMBER = '919876543210'; // Replace with your number
```

**Format Rules:**
- Include country code (no + symbol)
- No spaces or dashes
- Example India: `919876543210`
- Example US: `15551234567`

**Test it:**
1. Fill out the order form
2. Click submit
3. Ensure WhatsApp opens with correct number

---

### 2. Update Pricing (REQUIRED ⚠️)

**File:** `src/config/pricing.js`

```javascript
// Lines 2-7
export const PRICING_MAP = {
  VHS: { USB: 500, MP4: 450 },      // Change these prices
  Cassette: { MP3: 300, USB: 350 },
  CD: { USB: 200, MP3: 150 },
  DVD: { MP4: 250, USB: 300 }
};
```

**To add new media types:**

```javascript
export const PRICING_MAP = {
  VHS: { USB: 500, MP4: 450 },
  '8mm Film': { USB: 800, MP4: 750 },  // Add new type
  // ...
};

// Also update:
export const MEDIA_TYPES = ['VHS', 'Cassette', 'CD', 'DVD', '8mm Film'];

export const OUTPUT_FORMATS = {
  VHS: ['USB', 'MP4'],
  '8mm Film': ['USB', 'MP4'],  // Add here too
  // ...
};
```

---

### 3. Update Business Information (REQUIRED ⚠️)

**File:** `src/components/Contact.jsx`

```javascript
// Lines 22-47 - Update these:
<p>123 Media Street, Digital Plaza<br />Your City, State 12345</p>  // Address
<p>+91 1234567890<br />Mon-Sat: 10 AM - 7 PM</p>                   // Phone & hours
<p>info@mediaconvert.com<br />support@mediaconvert.com</p>         // Emails
```

**File:** `src/components/Footer.jsx`

```javascript
// Update footer contact info (similar structure)
```

---

### 4. Update Website Title & Meta

**File:** `index.html`

```html
<!-- Line 7 -->
<title>Your Shop Name - Media Conversion Services</title>

<!-- Add after line 7 -->
<meta name="description" content="Your custom description for SEO" />
<meta name="keywords" content="media conversion, VHS to digital, your city" />
```

---

## Branding

### Change Business Name

**File:** `src/components/Navbar.jsx`

```javascript
// Line 30
<span className="logo-text">YourShopName</span>
```

**Also update in:** `src/components/Footer.jsx` (line 18)

---

### Change Logo Icon

**Replace emoji with your logo:**

**File:** `src/components/Navbar.jsx`

```javascript
// Line 29 - Replace with image:
<img src="/logo.png" alt="Logo" className="logo-icon" />
```

**Add to:** `public/logo.png`

**Update CSS:** `src/components/Navbar.css`

```css
/* Line 33 - Change from font-size to width/height */
.logo-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
```

---

### Change Color Scheme

**File:** `src/index.css`

```css
:root {
  /* Primary colors - controls purple gradient */
  --primary-gradient: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
  
  /* WhatsApp button - usually keep green */
  --success-gradient: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  
  /* Text colors */
  --text-dark: #1f2937;        /* Headings */
  --text-medium: #6b7280;      /* Body text */
}
```

**Popular color schemes:**

```css
/* Blue & Teal */
--primary-gradient: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);

/* Green & Emerald */
--primary-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);

/* Orange & Red */
--primary-gradient: linear-gradient(135deg, #f97316 0%, #dc2626 100%);

/* Pink & Purple */
--primary-gradient: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
```

**Preview changes:**
- Navbar CTA button
- Hero section background
- Service format badges
- Pricing wheel selections
- Footer accent colors

---

## Content Updates

### Modify Services Section

**File:** `src/components/Services.jsx`

```javascript
// Lines 5-30
const services = [
  {
    icon: '📼',                                    // Change emoji or use image
    title: 'Your Service Name',                   // Service title
    description: 'Your service description...',   // Description
    formats: ['Format1', 'Format2']               // Output formats
  },
  // Add more services...
];
```

**To add a new service:**

```javascript
{
  icon: '📷',
  title: 'Photo Scanning',
  description: 'Digitize your old photographs with high-quality scanning.',
  formats: ['JPEG', 'PDF']
},
```

---

### Update Hero Section

**File:** `src/components/Hero.jsx`

```javascript
// Line 22-23 - Main heading
<h1 className="hero-title">
  Your Custom <span className="highlight">Headline</span>
</h1>

// Line 25-27 - Subheading
<p className="hero-subtitle">
  Your custom description text...
</p>

// Lines 30-42 - Feature bullets
<div className="feature-item">
  <span className="feature-icon">✓</span>
  <span>Your Feature</span>
</div>
```

---

### Customize FAQ Section

**File:** `src/components/FAQ.jsx`

```javascript
// Lines 7-48
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer...'
  },
  // Add more FAQs...
];
```

**Tips for good FAQs:**
- Address common customer concerns
- Include pricing and timeline questions
- Explain your process
- Cover technical details
- Add 6-10 questions total

---

### Update "How It Works" Steps

**File:** `src/components/HowItWorks.jsx`

```javascript
// Lines 6-32
const steps = [
  {
    number: '1',
    title: 'Step Title',
    description: 'Step description...',
    icon: '📱'
  },
  // Modify or add steps...
];
```

---

## Styling

### Adjust Section Spacing

**File:** `src/index.css`

```css
:root {
  /* Change section padding (currently 5rem 2rem) */
  --section-padding: 4rem 2rem;  /* Reduce vertical space */
}
```

---

### Modify Button Styles

**Example: Change primary button style**

**File:** `src/components/Hero.css`

```css
.primary-btn {
  /* Current gradient button */
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  
  /* Option 1: Solid color */
  background: #2563eb;
  
  /* Option 2: Outlined */
  background: transparent;
  border: 2px solid #2563eb;
  color: #2563eb;
  
  /* Option 3: Different shape */
  border-radius: 10px;  /* More rectangular */
  border-radius: 50px;  /* More pill-shaped */
}
```

---

### Customize Fonts

**Option 1: Use Google Fonts**

**File:** `index.html`

```html
<!-- Add in <head> section -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

**File:** `src/index.css`

```css
:root {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

**Popular font combinations:**
- Headings: Montserrat, Poppins, Raleway
- Body: Open Sans, Roboto, Lato

---

### Adjust Animations

**Disable animations (for faster feel):**

**File:** `src/components/Hero.css`

```css
/* Remove or comment out animation properties */
.hero-title {
  /* animation: fadeInUp 0.8s ease; */
}
```

**Speed up animations:**

```css
/* Change duration from 0.8s to 0.4s */
animation: fadeInUp 0.4s ease;
```

---

## Adding Features

### Add Google Maps

**File:** `src/components/Contact.jsx`

Replace the map placeholder (lines 56-61) with:

```javascript
<div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '15px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
```

**Get embed code:**
1. Go to Google Maps
2. Find your business location
3. Click "Share"
4. Select "Embed a map"
5. Copy the `src` URL

---

### Add Social Media Links

**File:** `src/components/Footer.jsx`

```javascript
// Lines 24-29 - Replace # with actual URLs
<div className="social-links">
  <a href="https://facebook.com/yourpage" aria-label="Facebook">📘</a>
  <a href="https://instagram.com/yourprofile" aria-label="Instagram">📷</a>
  <a href="https://twitter.com/yourhandle" aria-label="Twitter">🐦</a>
  <a href="https://youtube.com/yourchannel" aria-label="YouTube">📹</a>
</div>
```

**To use icon images instead of emojis:**

```javascript
<a href="https://facebook.com/yourpage" aria-label="Facebook">
  <img src="/icons/facebook.svg" alt="Facebook" />
</a>
```

---

### Add Analytics (Google Analytics)

**File:** `index.html`

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

### Add More Output Formats

**File:** `src/config/pricing.js`

```javascript
export const OUTPUT_FORMATS = {
  VHS: ['USB', 'MP4', 'Cloud'],          // Add 'Cloud'
  Cassette: ['MP3', 'USB', 'WAV'],      // Add 'WAV'
  CD: ['USB', 'MP3', 'FLAC'],           // Add 'FLAC'
  DVD: ['MP4', 'USB', 'MKV']            // Add 'MKV'
};

// Add prices
export const PRICING_MAP = {
  VHS: { USB: 500, MP4: 450, Cloud: 400 },
  Cassette: { MP3: 300, USB: 350, WAV: 400 },
  CD: { USB: 200, MP3: 150, FLAC: 250 },
  DVD: { MP4: 250, USB: 300, MKV: 300 }
};
```

---

## Testing Changes

After making any changes:

1. **Check in browser:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

2. **Test on mobile:**
   - Open browser dev tools (F12)
   - Toggle device toolbar
   - Test iPhone/Android views

3. **Test WhatsApp integration:**
   - Fill out the order form
   - Click submit
   - Verify WhatsApp opens correctly

4. **Test all links:**
   - Navigation menu items
   - Footer links
   - Social media links
   - CTA buttons

5. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Common Issues & Solutions

### Issue: WhatsApp not opening

**Solution:** Check the number format in `src/config/pricing.js`
- Must include country code
- No + symbol, spaces, or dashes
- Example: `919876543210`

### Issue: Pricing not updating

**Solution:** Clear browser cache or hard refresh (Ctrl+F5)

### Issue: Colors not changing

**Solution:** Ensure you're editing CSS variables in `src/index.css`, not individual component CSS files

### Issue: Changes not appearing

**Solution:** 
1. Check console for errors (F12)
2. Restart dev server
3. Clear browser cache

---

## Need Help?

If you're stuck:
1. Check the browser console for errors (F12)
2. Review this guide
3. Check the README.md file
4. Test in a different browser

---

**Happy Customizing! 🎉**
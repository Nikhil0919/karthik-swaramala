# 🚀 Deployment Guide

This guide covers how to deploy your Media Conversion Shop website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Updated WhatsApp number in `src/config/pricing.js`
- [ ] Updated all pricing information
- [ ] Changed business name and branding
- [ ] Updated contact information
- [ ] Replaced all placeholder text
- [ ] Tested all forms and links
- [ ] Verified WhatsApp integration works
- [ ] Optimized images (if added)
- [ ] Tested on mobile devices
- [ ] Checked browser console for errors

---

## Build for Production

Before deploying to any platform, create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

**Test the production build locally:**

```bash
npm run preview
```

Visit http://localhost:4173 to preview the production build.

---

## Deployment Options

### Option 1: Vercel (Recommended for Beginners)

**Pros:** Free, automatic deployments, CDN, HTTPS included

**Steps:**

1. **Create account:** Go to [vercel.com](https://vercel.com) and sign up

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Login:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   cd "shop react"
   vercel
   ```

5. **Follow prompts:**
   - Setup and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name? `media-conversion-shop` (or your choice)
   - Directory? `.` (press Enter)
   - Override settings? `N`

6. **Your site is live!** Vercel will provide a URL like: `your-project.vercel.app`

**To deploy updates:**
```bash
vercel --prod
```

**Custom Domain:**
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Update DNS settings as instructed

---

### Option 2: Netlify

**Pros:** Free tier, drag-and-drop deployment, form handling

**Steps:**

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Manual Deploy (Easiest):**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag the `dist` folder onto the deploy dropzone
   - Done! Your site is live

3. **CLI Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy
   ```

   Select the `dist` folder when prompted.

4. **Auto-deploy from Git:**
   - Push code to GitHub
   - Connect Netlify to your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Automatic deployments on every git push

**Custom Domain:**
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Follow DNS configuration steps

---

### Option 3: GitHub Pages

**Pros:** Free, integrated with GitHub

**Steps:**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'  // Add this line
   })
   ```

4. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

5. **Deploy:**
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Save

Your site will be live at: `https://yourusername.github.io/your-repo-name`

---

### Option 4: Traditional Hosting (cPanel/FTP)

**For:** Shared hosting providers like Bluehost, HostGator, etc.

**Steps:**

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Connect via FTP (FileZilla, etc.)
   - Navigate to `public_html` or `www` directory
   - Upload all contents of the `dist` folder
   - Make sure `index.html` is in the root

3. **Configure `.htaccess` (for React Router):**
   
   Create a `.htaccess` file in the root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

### Option 5: Firebase Hosting

**Pros:** Fast CDN, free SSL, good for future expansion

**Steps:**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```

   - Select options:
     - Public directory: `dist`
     - Single-page app: `Yes`
     - GitHub auto-deploys: `No` (or Yes if preferred)

4. **Build and deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

Your site will be live at: `your-project.web.app`

---

## Post-Deployment Tasks

### 1. Update SEO

**File:** `index.html` (before rebuilding)

```html
<head>
  <title>Your Shop Name - Media Conversion Services in [City]</title>
  <meta name="description" content="Professional VHS, cassette, CD, and DVD conversion services in [City]. Fast, affordable, and high-quality digital media conversion." />
  <meta name="keywords" content="media conversion, VHS to digital, [city] media conversion, DVD conversion" />
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Your Shop Name - Media Conversion" />
  <meta property="og:description" content="Convert your old media to digital formats" />
  <meta property="og:image" content="https://yoursite.com/og-image.jpg" />
  <meta property="og:url" content="https://yoursite.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Shop Name - Media Conversion" />
  <meta name="twitter:description" content="Convert your old media to digital formats" />
  <meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg" />
</head>
```

### 2. Set Up Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html` (see CUSTOMIZATION_GUIDE.md)

### 3. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership

### 4. Create and Submit Sitemap

**Install plugin:**
```bash
npm install --save-dev vite-plugin-sitemap
```

**Update `vite.config.js`:**
```javascript
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://yoursite.com',
      routes: [
        '/',
      ],
    }),
  ],
})
```

### 5. Test Your Deployed Site

- [ ] All pages load correctly
- [ ] WhatsApp integration works
- [ ] Forms submit properly
- [ ] Images load
- [ ] Mobile responsive
- [ ] Links work
- [ ] SSL certificate active (HTTPS)
- [ ] Fast loading speed

**Speed Test Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## Domain Setup

### Purchase a Domain

Recommended registrars:
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://godaddy.com)

**Suggested domain names:**
- yourbusinessname.com
- [city]mediaconversion.com
- vhstodigital[city].com

### Connect Custom Domain

Domain configuration varies by hosting platform. General steps:

1. **Get DNS records from your hosting platform**
   - Vercel: A record + CNAME
   - Netlify: A record or CNAME
   - GitHub Pages: A record

2. **Update DNS settings in domain registrar:**
   - Login to your domain registrar
   - Find DNS settings
   - Add provided records
   - Wait 24-48 hours for propagation

3. **Enable HTTPS:**
   Most platforms auto-enable SSL. If not:
   - Let's Encrypt (free)
   - CloudFlare (free tier available)

---

## Continuous Deployment

### Auto-deploy on Git Push

**Vercel/Netlify with GitHub:**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Connect to hosting platform:
   - Link your GitHub account
   - Select repository
   - Configure build settings
   - Every push auto-deploys

### Update Workflow

```bash
# Make changes to your code
git add .
git commit -m "Description of changes"
git push

# Auto-deployed! 🚀
```

---

## Performance Optimization

### 1. Enable Compression

Most platforms enable this automatically. For traditional hosting:

**`.htaccess` file:**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

### 2. Cache Static Assets

Vite handles this automatically in production builds.

### 3. Image Optimization

If you add images:
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Use appropriate sizes
- Lazy load off-screen images

### 4. Use CDN

Most modern platforms (Vercel, Netlify) include CDN by default.

For traditional hosting, consider:
- CloudFlare (free tier)
- BunnyCDN
- Amazon CloudFront

---

## Monitoring & Maintenance

### Set Up Uptime Monitoring

**Free options:**
- [UptimeRobot](https://uptimerobot.com) - Free, checks every 5 minutes
- [StatusCake](https://statuscake.com) - Free tier available

### Performance Monitoring

- Google Analytics (traffic)
- Search Console (SEO)
- PageSpeed Insights (performance)

### Regular Updates

Check monthly:
- WhatsApp integration still works
- Forms submitting correctly
- No broken links
- Prices are current
- Contact info accurate
- SSL certificate valid

---

## Troubleshooting

### Site not loading after deployment

**Check:**
- Build completed successfully
- Files uploaded to correct directory
- DNS propagated (use [whatsmydns.net](https://whatsmydns.net))
- No console errors

### WhatsApp not working on live site

**Verify:**
- Number format correct
- No encoding issues
- Test on different devices
- Check browser console

### Images not loading

**Fix:**
- Use absolute paths: `/images/logo.png`
- Check file names (case-sensitive on Linux servers)
- Verify files uploaded

### Slow loading

**Solutions:**
- Enable caching
- Use CDN
- Compress images
- Minimize CSS/JS (Vite does this)

---

## Security Best Practices

1. **Always use HTTPS** - Most platforms provide free SSL
2. **Keep dependencies updated:**
   ```bash
   npm audit
   npm audit fix
   ```
3. **Don't commit sensitive data** - Check `.gitignore`
4. **Use environment variables** for sensitive config
5. **Enable CSP headers** (Content Security Policy)

---

## Cost Breakdown

### Free Options
- Vercel (Free tier: 100GB bandwidth/month)
- Netlify (Free tier: 100GB bandwidth/month)
- GitHub Pages (Free for public repos)
- Firebase Hosting (Free tier: 10GB bandwidth/month)

### Paid Considerations
- Custom domain: $10-15/year
- Additional bandwidth: ~$20/month if needed
- Email hosting: $5-10/month (Google Workspace, etc.)

---

## Next Steps After Deployment

1. **Test thoroughly** on multiple devices
2. **Share with friends** for feedback
3. **Monitor analytics** to see visitor behavior
4. **Collect customer feedback** via WhatsApp
5. **Iterate and improve** based on data
6. **Add features** as needed (testimonials, gallery, etc.)

---

## Support Resources

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Vite Docs: [vitejs.dev](https://vitejs.dev)
- React Docs: [react.dev](https://react.dev)

---

**Your website is ready to go live! 🎉**

Need help? Check the console for errors or review this guide.
# Testing Guide

## 🧪 How to Test Your React Portfolio

This guide will help you test your new portfolio locally and verify all features are working correctly.

## Prerequisites

Before testing, you need:
1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **npm** (comes with Node.js)

### Verify Installation

Open your terminal and run:
```bash
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
```

## Step 1: Install Dependencies

Navigate to your project directory and install all required packages:

```bash
cd /Users/sandeep/Sandeep/Projects/sandeepstele.github.io
npm install
```

This will install:
- React and React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- And all other dependencies

**Expected output:** You should see a progress bar and "added XXX packages" message.

## Step 2: Start Development Server

Run the development server:

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Step 3: Open in Browser

1. Open your browser
2. Navigate to `http://localhost:5173`
3. You should see your portfolio homepage!

## 🔍 What to Test

### 1. Visual Appearance

**Home Page:**
- [ ] Hero section displays with your name
- [ ] Animated background circles are visible
- [ ] Text is readable and properly styled
- [ ] "Learn More" and "View Resume" buttons are visible

**About Section:**
- [ ] About text is displayed
- [ ] "More About Me" button works

**Projects Section:**
- [ ] Project cards are displayed in a grid
- [ ] Each card shows title, description, tech stack
- [ ] GitHub links are clickable

**Contact Section:**
- [ ] Contact information is displayed
- [ ] Social media icons are visible

### 2. Navigation

**Header:**
- [ ] Header is sticky (stays at top when scrolling)
- [ ] Logo/name is visible
- [ ] Navigation links (Home, Projects, About, Contact) work
- [ ] Active page is highlighted

**Mobile Menu:**
- [ ] Resize browser to mobile size (< 768px width)
- [ ] Hamburger menu icon appears
- [ ] Click hamburger - menu slides in from right
- [ ] Menu links work
- [ ] Click outside or X - menu closes

### 3. Dark/Light Mode

**Theme Toggle:**
- [ ] Click sun/moon icon in header
- [ ] Background changes from light to dark (or vice versa)
- [ ] Text colors adjust appropriately
- [ ] All sections look good in both modes
- [ ] Refresh page - theme persists

**Test Both Modes:**
- [ ] Light mode: Light background, dark text
- [ ] Dark mode: Dark background, light text
- [ ] All colors have good contrast

### 4. Animations

**Scroll Animations:**
- [ ] Scroll down the page slowly
- [ ] Sections fade in as they come into view
- [ ] Animations are smooth, not jarring

**Hero Section:**
- [ ] Background circles animate (pulse effect)
- [ ] Down arrow bounces
- [ ] Text fades in on page load

**Interactive Elements:**
- [ ] Hover over project cards - they lift up slightly
- [ ] Hover over buttons - they scale up
- [ ] Hover over skill tags - they scale up
- [ ] Smooth transitions on all hover effects

### 5. Routing

**Page Navigation:**
- [ ] Click "Projects" in nav - goes to `/projects`
- [ ] Click "About" in nav - goes to `/about`
- [ ] Click "Contact" in nav - goes to `/contact`
- [ ] Click logo/name - returns to home
- [ ] Browser back/forward buttons work
- [ ] URL changes correctly

**404 Page:**
- [ ] Navigate to `/nonexistent-page`
- [ ] 404 page displays
- [ ] "Back to Home" button works

### 6. Responsive Design

**Desktop (> 1024px):**
- [ ] Full navigation menu visible
- [ ] Content centered with max-width
- [ ] Multi-column layouts display correctly

**Tablet (768px - 1024px):**
- [ ] Layout adjusts appropriately
- [ ] Text remains readable
- [ ] Images/cards resize properly

**Mobile (< 768px):**
- [ ] Hamburger menu appears
- [ ] Single column layout
- [ ] Text is readable (not too small)
- [ ] Buttons are easily tappable
- [ ] No horizontal scrolling

**Test Different Sizes:**
1. Open browser DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test these sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

### 7. Scroll Behavior

**Smooth Scrolling:**
- [ ] Click "Learn More" on hero - smoothly scrolls to About
- [ ] Click down arrow - smoothly scrolls down
- [ ] Scroll to bottom - "Scroll to Top" button appears
- [ ] Click "Scroll to Top" - smoothly scrolls to top

### 8. Links and Buttons

**External Links:**
- [ ] GitHub links open in new tab
- [ ] LinkedIn link opens in new tab
- [ ] Email link opens mail client
- [ ] Resume PDF link works

**Internal Links:**
- [ ] All navigation links work
- [ ] "More About Me" button works
- [ ] All section links work

### 9. Content Display

**Projects Page:**
- [ ] All projects are displayed
- [ ] Tech stack tags are visible
- [ ] Duration is shown
- [ ] Links work

**About Page:**
- [ ] Experience section displays all jobs
- [ ] Education section shows both degrees
- [ ] Skills are organized by category
- [ ] Publications are listed
- [ ] Awards are displayed
- [ ] Courses are shown

### 10. Performance

**Load Time:**
- [ ] Page loads in < 3 seconds
- [ ] No visible lag when scrolling
- [ ] Animations are smooth (60fps)
- [ ] No console errors (check DevTools)

**Browser Console:**
1. Open DevTools (F12)
2. Go to Console tab
3. [ ] No red errors
4. [ ] No warnings (or only minor ones)

## 🐛 Common Issues and Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Port 5173 already in use
**Solution:** 
```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

### Issue: Dependencies not installing
**Solution:**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

### Issue: Blank page or errors
**Solution:**
1. Check browser console for errors (F12)
2. Ensure all files are saved
3. Restart dev server (Ctrl+C, then `npm run dev`)
4. Clear browser cache (Ctrl+Shift+Delete)

### Issue: Styles not loading
**Solution:**
1. Ensure Tailwind CSS is properly configured
2. Check `src/styles/index.css` exists
3. Restart dev server

### Issue: Animations not working
**Solution:**
1. Check browser console for errors
2. Ensure Framer Motion is installed: `npm list framer-motion`
3. Try a different browser

## 📱 Mobile Testing

### Using Browser DevTools
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select device from dropdown
4. Test all features

### Using Real Device
1. Find your local IP: `ifconfig` (Mac/Linux) or `ipconfig` (Windows)
2. Start dev server: `npm run dev -- --host`
3. On mobile, visit: `http://YOUR_IP:5173`
4. Test all features

## ♿ Accessibility Testing

### Keyboard Navigation
- [ ] Press Tab - focus moves through interactive elements
- [ ] Press Enter on links/buttons - they activate
- [ ] Press Escape in mobile menu - it closes
- [ ] Focus indicators are visible

### Screen Reader (Optional)
- [ ] Enable screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Navigate through page
- [ ] All content is announced
- [ ] Images have alt text
- [ ] Buttons have labels

## 🎨 Visual Testing Checklist

### Colors
- [ ] Text is readable on all backgrounds
- [ ] Links are distinguishable
- [ ] Buttons have clear hover states
- [ ] Dark mode has good contrast

### Typography
- [ ] Headings are properly sized
- [ ] Body text is readable (not too small)
- [ ] Line height is comfortable
- [ ] Font weights are appropriate

### Spacing
- [ ] Sections have adequate padding
- [ ] Elements aren't cramped
- [ ] White space is balanced
- [ ] Mobile spacing is appropriate

### Images
- [ ] Favicon appears in browser tab
- [ ] Images load correctly
- [ ] No broken image icons

## 🚀 Production Build Testing

Before deploying, test the production build:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4173` and test everything again.

**Check:**
- [ ] Build completes without errors
- [ ] Preview works correctly
- [ ] All features work in production mode
- [ ] No console errors

## 📊 Performance Testing

### Using Lighthouse
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"
5. Review scores:
   - [ ] Performance: > 90
   - [ ] Accessibility: > 90
   - [ ] Best Practices: > 90
   - [ ] SEO: > 90

## ✅ Final Checklist

Before deploying:
- [ ] All features tested and working
- [ ] No console errors
- [ ] Responsive on all screen sizes
- [ ] Dark/light mode works
- [ ] All links work
- [ ] Content is accurate
- [ ] Production build works
- [ ] Lighthouse scores are good

## 🎉 Ready to Deploy!

Once all tests pass, you're ready to deploy:

```bash
git add .
git commit -m "Complete React portfolio"
git push origin main
```

GitHub Actions will automatically build and deploy your site!

---

**Need help?** Check the [README.md](README.md) troubleshooting section.

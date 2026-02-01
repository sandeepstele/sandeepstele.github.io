# Migration Guide: Jekyll to React

## Overview

Your portfolio has been completely rebuilt from a Jekyll-based static site to a modern React application with TypeScript, Tailwind CSS, and Framer Motion.

## What Changed

### Technology Stack

**Before (Jekyll):**
- Static HTML files
- Jekyll templating
- Basic CSS
- No JavaScript framework
- GitHub Pages Jekyll integration

**After (React):**
- React 18 with TypeScript
- Vite build tool
- Tailwind CSS
- Framer Motion animations
- React Router for navigation
- GitHub Actions for deployment

## File Structure Comparison

### Old Structure
```
├── index.html
├── about.html
├── projects.html
├── publications.html
├── awards.html
├── courses.html
├── contact.html
├── work.html
├── resume.html
├── _includes/
│   ├── header.html
│   └── footer.html
├── _layouts/
│   └── default.html
├── css/
│   └── style.css
└── assets/
    └── resume.pdf
```

### New Structure
```
├── src/
│   ├── components/
│   │   ├── common/       # Reusable components
│   │   ├── layout/       # Header, Footer
│   │   └── sections/     # Page sections
│   ├── context/          # Theme context
│   ├── data/             # Content data
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Route pages
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   ├── utils/            # Utilities
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── resume.pdf
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Content Migration

All your content has been migrated to TypeScript data files:

### Projects
**Old:** `projects.html` with hardcoded HTML
**New:** `src/data/projects.ts` with structured data

### Experience
**Old:** `work.html` and parts of `about.html`
**New:** `src/data/experience.ts`

### Education
**Old:** Part of `about.html`
**New:** `src/data/education.ts`

### Skills
**Old:** Part of `about.html`
**New:** `src/data/skills.ts`

### Publications
**Old:** `publications.html`
**New:** `src/data/publications.ts`

### Awards
**Old:** `awards.html`
**New:** `src/data/awards.ts`

### Courses
**Old:** `courses.html`
**New:** `src/data/courses.ts`

## New Features Added

### 1. Dark/Light Mode
- Toggle button in header
- Persists preference in localStorage
- Smooth transitions between themes
- System preference detection

### 2. Animations
- Scroll-triggered animations
- Parallax effects on hero section
- Hover effects on cards
- Smooth page transitions
- Animated background elements

### 3. Interactive Components
- Hover effects on project cards
- Animated skill tags
- Interactive navigation
- Mobile hamburger menu
- Scroll-to-top button

### 4. Improved Navigation
- React Router for client-side routing
- Smooth scroll to sections
- Active link highlighting
- Mobile-responsive menu

### 5. Better Performance
- Code splitting
- Lazy loading
- Optimized bundle size
- Fast page loads

### 6. Enhanced SEO
- React Helmet for meta tags
- Open Graph tags
- Semantic HTML
- Proper heading hierarchy

### 7. Accessibility
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader support

## Deployment Changes

### Old Deployment (Jekyll)
- GitHub Pages built Jekyll automatically
- Push to main branch
- Jekyll processed files

### New Deployment (React)
- GitHub Actions workflow
- Builds React app
- Deploys to GitHub Pages
- More control over build process

## How to Update Content

### Adding a New Project

**Old way:**
Edit `projects.html` and add HTML markup

**New way:**
Edit `src/data/projects.ts`:
```typescript
{
  id: 'my-project',
  title: 'My New Project',
  description: 'Project description',
  stack: ['React', 'TypeScript'],
  duration: '2024',
  github: 'https://github.com/...',
  featured: true,
}
```

### Updating Experience

**Old way:**
Edit `work.html` or `about.html`

**New way:**
Edit `src/data/experience.ts`:
```typescript
{
  id: 'company-name',
  company: 'Company Name',
  position: 'Position',
  duration: 'Jan 2024 - Present',
  location: 'Location',
  description: ['Point 1', 'Point 2'],
}
```

### Changing Colors

**Old way:**
Edit `css/style.css`

**New way:**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#007acc',
    dark: '#00d4ff',
  },
}
```

## Breaking Changes

### URLs
- Old: `/projects.html`
- New: `/projects`

The new routing is cleaner without `.html` extensions.

### Assets
- Old: Root level (`/favicon.svg`)
- New: In `public/` folder (`/favicon.svg` - same URL)

### Styling
- Old: Custom CSS in `css/style.css`
- New: Tailwind CSS utility classes

## Benefits of the New Stack

1. **Better Developer Experience**
   - Hot module replacement
   - TypeScript type safety
   - Component reusability
   - Modern tooling

2. **Better User Experience**
   - Smooth animations
   - Fast page loads
   - Interactive elements
   - Dark mode

3. **Better Maintainability**
   - Modular components
   - Structured data
   - Type safety
   - Clear architecture

4. **Better Performance**
   - Optimized builds
   - Code splitting
   - Lazy loading
   - Smaller bundle sizes

5. **Better SEO**
   - Meta tags
   - Open Graph
   - Semantic HTML
   - Fast loading

## Backward Compatibility

### Old URLs
If you have external links to old URLs like `/projects.html`, you may want to set up redirects.

### Resume PDF
The resume PDF location remains the same: `/assets/resume.pdf`

### Favicon
The favicon remains at the root level: `/favicon.svg`

## Next Steps

1. **Install dependencies**: `npm install`
2. **Test locally**: `npm run dev`
3. **Update content**: Edit files in `src/data/`
4. **Customize styling**: Edit `tailwind.config.js`
5. **Deploy**: Push to GitHub (automatic deployment)

## Rollback Plan

If you need to rollback to the old Jekyll site:

1. The old files are still in the repository (marked in `.gitignore`)
2. You can restore them by removing the React files
3. Or create a new branch with the old code

## Support

For questions or issues:
1. Check [README.md](README.md) for detailed documentation
2. Check [SETUP.md](SETUP.md) for setup instructions
3. Review the code comments in source files

---

**Welcome to your new modern portfolio! 🎉**

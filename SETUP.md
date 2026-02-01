# Quick Setup Guide

## 🚀 Getting Started

Your modern React portfolio is now ready! Follow these steps to get it running.

## Step 1: Install Node.js and npm

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download and install the LTS version (v20 or higher)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- And more...

## Step 3: Start Development Server

```bash
npm run dev
```

Your site will be available at: `http://localhost:5173`

## Step 4: Customize Your Content

Edit these files to add your personal information:

### 📁 Data Files (in `src/data/`)
- `projects.ts` - Your projects
- `experience.ts` - Work experience
- `education.ts` - Educational background
- `skills.ts` - Technical skills
- `publications.ts` - Research publications
- `awards.ts` - Awards and achievements
- `courses.ts` - Courses completed

### 🔗 Contact Information
- `src/components/layout/Footer.tsx` - Update social links
- `src/components/sections/Contact.tsx` - Update email and location

### 🎨 Styling
- `tailwind.config.js` - Change colors and theme
- `src/styles/index.css` - Global styles

## Step 5: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Step 6: Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Initial React portfolio"
   git push origin main
   ```

3. **Wait for deployment:**
   - Check the "Actions" tab in your repository
   - Once complete, your site will be live at `https://sandeepstele.github.io`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then upload the 'dist' folder to your hosting provider
```

## 🎯 What's Included

✅ **Modern Tech Stack**
- Vite for fast development
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations

✅ **Features**
- Dark/Light mode toggle
- Smooth scroll animations
- Parallax effects
- Interactive project cards
- Responsive mobile menu
- SEO optimized
- Accessibility features

✅ **Pages**
- Home (Hero + About + Featured Projects)
- Projects (All projects)
- About (Experience + Education + Skills + Publications + Awards + Courses)
- Contact
- 404 Not Found

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

## 📝 Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Start dev server (`npm run dev`)
3. ✏️ Update your personal information in data files
4. 🎨 Customize colors and styling
5. 📸 Add your photos/images to `public/` folder
6. 🚀 Deploy to GitHub Pages

## 🆘 Need Help?

Check the main [README.md](README.md) for:
- Detailed documentation
- Troubleshooting guide
- Customization options
- Deployment instructions

## 📧 Support

If you encounter any issues:
1. Check the [README.md](README.md) troubleshooting section
2. Ensure Node.js v18+ is installed
3. Try deleting `node_modules` and running `npm install` again
4. Check the browser console for errors

---

**Happy coding! 🎉**

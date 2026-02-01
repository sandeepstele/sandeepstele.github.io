# Sandeep S - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light mode toggle, responsive design, and an engaging user experience.

## 🚀 Features

- ⚡ **Modern Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- 🎨 **Smooth Animations**: Framer Motion for fluid, professional animations
- 🌓 **Dark/Light Mode**: Theme toggle with localStorage persistence
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎯 **Interactive Components**: Hover effects, parallax scrolling, and animated cards
- ♿ **Accessible**: ARIA labels, keyboard navigation, and semantic HTML
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and semantic structure
- 🚢 **Auto Deploy**: GitHub Actions workflow for automated deployment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sandeepstele/sandeepstele.github.io.git
   cd sandeepstele.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the site in action.

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Button, Card, etc.)
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Page sections (Hero, About, Projects, etc.)
├── context/             # React Context (Theme)
├── data/                # Data files (projects, experience, etc.)
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── styles/              # Global styles
├── types/               # TypeScript type definitions
├── utils/               # Utility functions (animations)
├── App.tsx              # Main App component
└── main.tsx             # Entry point
```

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projects.ts`
2. **Experience**: Edit `src/data/experience.ts`
3. **Education**: Edit `src/data/education.ts`
4. **Skills**: Edit `src/data/skills.ts`
5. **Publications**: Edit `src/data/publications.ts`
6. **Awards**: Edit `src/data/awards.ts`
7. **Courses**: Edit `src/data/courses.ts`

### Update Contact Information

Edit the contact links in:
- `src/components/layout/Footer.tsx`
- `src/components/sections/Contact.tsx`

### Change Colors

Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#007acc',  // Your primary color for light mode
    dark: '#00d4ff',   // Your primary color for dark mode
  },
}
```

### Add New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to the appropriate page in `src/pages/`

## 🚀 Deployment

### GitHub Pages (Automatic)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **Wait for deployment**
   - GitHub Actions will automatically build and deploy your site
   - Check the "Actions" tab to monitor the deployment
   - Your site will be live at `https://sandeepstele.github.io`

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   - The build output will be in the `dist` directory
   - Upload this to your hosting provider
   - Or use GitHub Pages, Netlify, Vercel, etc.

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` directory with your domain name
2. Configure DNS settings with your domain provider
3. Update the `base` in `vite.config.ts` if needed

## 🔧 Configuration

### Vite Configuration

Edit `vite.config.ts` to customize build settings:
- Change the `base` URL for deployment
- Add plugins
- Configure build options

### TypeScript Configuration

Edit `tsconfig.json` for TypeScript settings:
- Strict mode options
- Path aliases
- Compiler options

### Tailwind Configuration

Edit `tailwind.config.js` for styling:
- Custom colors
- Fonts
- Animations
- Breakpoints

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Development server won't start
- Ensure Node.js v18+ is installed
- Delete `node_modules` and run `npm install` again
- Check if port 5173 is already in use

### Build fails
- Clear the cache: `rm -rf node_modules dist`
- Reinstall dependencies: `npm install`
- Check for TypeScript errors: `npm run lint`

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility
- Verify JavaScript is enabled

### Dark mode not persisting
- Check browser localStorage is enabled
- Clear browser cache and cookies
- Verify ThemeContext is properly wrapped around the app

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sandeep S**
- GitHub: [@sandeepstele](https://github.com/sandeepstele)
- LinkedIn: [sandeepstele](https://linkedin.com/in/sandeepstele)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📈 Performance

This portfolio is optimized for performance:
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Code splitting and lazy loading
- Optimized images and assets

## 🔐 Security

- No sensitive data in the repository
- Environment variables for API keys (if needed)
- Regular dependency updates
- Secure deployment practices

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

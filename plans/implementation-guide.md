# React Portfolio - Implementation Guide

## Quick Start Commands

```bash
# 1. Create new Vite project with React + TypeScript
npm create vite@latest . -- --template react-ts

# 2. Install dependencies
npm install

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Install additional libraries
npm install framer-motion react-router-dom react-intersection-observer clsx lucide-react react-helmet-async

# 5. Start development server
npm run dev
```

## Configuration Files

### 1. tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007acc',
          dark: '#00d4ff',
        },
        accent: {
          light: '#00d4ff',
          dark: '#007acc',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

### 2. vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/repo-name/' if not using custom domain
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
})
```

### 3. tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Core Implementation

### 1. Theme Context (src/context/ThemeContext.tsx)

```typescript
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

### 2. Animation Utilities (src/utils/animations.ts)

```typescript
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};
```

### 3. Custom Hooks

#### useScrollAnimation (src/hooks/useScrollAnimation.ts)

```typescript
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return { ref, controls };
}
```

#### useParallax (src/hooks/useParallax.ts)

```typescript
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

export function useParallax(
  ref: RefObject<HTMLElement>,
  distance = 100
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 1], [0, distance]);
}
```

### 4. Common Components

#### Container (src/components/common/Container.tsx)

```typescript
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
```

#### Section (src/components/common/Section.tsx)

```typescript
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { fadeInUp, defaultTransition } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
      transition={defaultTransition}
      className={clsx('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  );
}
```

#### Card (src/components/common/Card.tsx)

```typescript
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={{ duration: 0.2 }}
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg',
        'border border-gray-200 dark:border-gray-700',
        'transition-shadow duration-300',
        hover && 'hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
```

#### Button (src/components/common/Button.tsx)

```typescript
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-primary-light dark:bg-primary-dark text-white hover:opacity-90',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

### 5. Layout Components

#### Header (src/components/layout/Header.tsx)

```typescript
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Sandeep S
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      />
    </motion.header>
  );
}
```

#### ThemeToggle (src/components/layout/ThemeToggle.tsx)

```typescript
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
}
```

#### MobileMenu (src/components/layout/MobileMenu.tsx)

```typescript
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          />
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-16 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
```

### 6. Section Components

#### Hero Section (src/components/sections/Hero.tsx)

```typescript
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, defaultTransition } from '@/utils/animations';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
      
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            Sandeep S
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
          >
            I build practical ML and data systems
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Software Engineer Intern at S2T AI (Singapore) working on LLM-based automation,
            MLOps and DevOps pipelines for AI-driven digital intelligence solutions
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button onClick={scrollToAbout}>
              Learn More
            </Button>
            <Button variant="secondary" onClick={() => window.open('/assets/resume.pdf')}>
              View Resume
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="text-gray-600 dark:text-gray-400" />
      </motion.button>
    </section>
  );
}
```

#### Projects Section (src/components/sections/Projects.tsx)

```typescript
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.filter(p => p.featured).map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
```

### 7. Data Structure Example (src/data/projects.ts)

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  duration: string;
  github?: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'llm-automation',
    title: 'LLM-Based Automation Agent',
    description: 'Built and deployed a secure LLM-powered automation agent using GPT-4o-Mini for tasks like file operations, web scraping, database queries, and text processing, containerized with Docker and integrated into CI pipelines.',
    stack: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'SQLite', 'CI/CD'],
    duration: 'Feb 2025 – Mar 2025',
    github: 'https://github.com/sandeepstele/LLM-Automation-Agent',
    featured: true,
  },
  {
    id: 'crime-analysis',
    title: 'Crime Analysis & Prediction — Karnataka Police Datathon (Winner)',
    description: 'Portal and dashboard for police FIR data with geospatial and behaviour analysis, plus time-series forecasts.',
    stack: ['Python', 'Django', 'Pandas', 'Scikit-Learn', 'Prophet', 'Tableau', 'Folium'],
    duration: 'Feb 2024 - Jun 2024',
    github: 'https://github.com/sandeepstele/KSP-final',
    featured: true,
  },
  // Add more projects...
];
```

### 8. Main App Setup (src/App.tsx)

```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
```

### 9. Home Page (src/pages/Home.tsx)

```typescript
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Sandeep S • Software Engineer & ML Specialist</title>
        <meta
          name="description"
          content="Sandeep S - Software Engineer Intern at S2T AI Singapore. ML engineer specializing in LLM agents, RAG search, geospatial analytics, and medical AI."
        />
      </Helmet>
      
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
```

### 10. Styles (src/styles/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

## GitHub Pages Deployment

### GitHub Actions Workflow (.github/workflows/deploy.yml)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Next Steps

1. **Backup existing site**: Create a branch or backup before starting
2. **Initialize project**: Run the setup commands
3. **Migrate content**: Copy content from HTML files to TypeScript data files
4. **Build components**: Follow the implementation guide above
5. **Test locally**: Run `npm run dev` and test all features
6. **Deploy**: Push to GitHub and let Actions deploy automatically

## Tips for Success

- **Start small**: Build one section at a time
- **Test frequently**: Check responsive design and animations
- **Use TypeScript**: Leverage type safety for data structures
- **Optimize images**: Use WebP format and lazy loading
- **Monitor performance**: Use Lighthouse to track metrics
- **Keep it accessible**: Test with keyboard navigation and screen readers

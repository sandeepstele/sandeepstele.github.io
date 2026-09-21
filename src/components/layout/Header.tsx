import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { ThemeToggle } from './ThemeToggle';
import { profile } from '@/data/profile';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]">
      <Container>
        <div className="flex h-[76px] items-center justify-between gap-4">
          <Link to="/" aria-label="Sandeep Satheesh home" className="flex items-center gap-3">
            <span className="serif flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-lg italic tracking-[-.1em] text-[var(--paper)]">ss.</span>
            <span className="text-[13px] font-semibold tracking-tight">Sandeep Satheesh<span className="text-[var(--accent)]">.</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navItems.map(item => <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => `text-xs transition-colors hover:text-[var(--accent)] ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}>{item.name}</NavLink>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-link mr-2 hidden lg:inline-flex">Résumé <ArrowUpRight size={14} /></a>
            <ThemeToggle />
            <button ref={toggleRef} className="icon-button md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[var(--line)] pb-5 pt-3 md:hidden">
          {navItems.map(item => <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-sm px-2 py-3 text-sm ${isActive ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-[var(--muted)]'}`}>{item.name}</NavLink>)}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-link px-2 py-3">View résumé <ArrowUpRight size={14} /></a>
        </nav>}
      </Container>
    </header>
  );
}

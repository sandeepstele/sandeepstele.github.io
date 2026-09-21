import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-7">
      <Container>
        <div className="flex flex-col justify-between gap-5 text-[11px] text-[var(--muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name}<span className="mx-3 text-[var(--line)]">/</span>Always a work in progress.</p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">GitHub <ArrowUpRight size={12} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">LinkedIn <ArrowUpRight size={12} /></a>
            <a href={`mailto:${profile.email}`} className="hover:text-[var(--accent)]">Email</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

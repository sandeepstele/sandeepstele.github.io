import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { profile } from '@/data/profile';

export function Contact({ standalone = false }: { standalone?: boolean }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyState('copied'); }
    catch { setCopyState('failed'); }
  };
  const Heading = standalone ? 'h1' : 'h2';
  return (
    <Section id="contact">
      <Container>
        <div className="contact-panel">
          <div>
            <p className="eyebrow mb-5 text-[var(--accent)]">{standalone ? 'Contact' : '03 / Say hello'}</p>
            <Heading className="section-heading">Good work starts<br />with a <em>conversation.</em></Heading>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">Working on an interesting ML problem, building a product, or have a question about my work? Drop me a note.</p>
          </div>
          <div>
            <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-3 border-b border-[var(--line)] py-4 text-[clamp(14px,2vw,20px)] tracking-tight hover:text-[var(--accent)]"><span className="break-all">{profile.email}</span><ArrowUpRight size={22} className="shrink-0" /></a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="button"><Mail size={14} /> Send an email</a>
              <button onClick={copyEmail} className="button button-secondary">{copyState === 'copied' ? <Check size={14} /> : <Copy size={14} />}{copyState === 'copied' ? 'Copied' : 'Copy address'}</button>
            </div>
            <p role="status" aria-live="polite" className="mt-2 min-h-5 text-xs text-[var(--muted)]">{copyState === 'copied' ? 'Email address copied to clipboard.' : copyState === 'failed' ? 'Couldn’t copy automatically. Select the address above to copy it.' : ''}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn <ArrowUpRight size={13} /></a>
              <a href={profile.resume} download="Sandeep_Satheesh_Resume.pdf" className="text-link">Résumé <Download size={13} /></a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

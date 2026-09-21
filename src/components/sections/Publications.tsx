import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { publications } from '@/data/publications';

export function Publications() {
  return (
    <Section id="publications" className="scroll-mt-24 bg-[var(--surface)]">
      <Container>
        <div className="section-title-row">
          <span className="section-number">04</span>
          <h2 className="section-heading">Research &amp; publications</h2>
        </div>

        <div>
          {publications.map((publication) => (
            <article key={publication.id} className="resume-row">
              <div className="resume-meta">
                <p className="font-mono text-xs leading-relaxed">{publication.year}</p>
                <p className="mt-2 text-sm leading-relaxed">{publication.venue}</p>
              </div>
              <div className="resume-body">
                <h3 className="mb-4 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                  {publication.title}
                </h3>
                {publication.authors && <p className="mb-3 text-sm text-[var(--muted)]">{publication.authors}</p>}
                {publication.description && <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">{publication.description}</p>}
                {publication.link && (
                  <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-link mt-6">
                    Read the paper <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

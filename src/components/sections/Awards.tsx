import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { awards } from '@/data/awards';

export function Awards() {
  return (
    <Section id="awards" className="scroll-mt-24">
      <Container>
        <div className="section-title-row">
          <span className="section-number">05</span>
          <h2 className="section-heading">Beyond the code</h2>
        </div>
        <p className="mb-8 max-w-2xl text-[var(--muted)]">Leadership, honors, and a few things built with a team.</p>

        <div>
          {awards.map((award) => (
            <article key={award.id} className="resume-row">
              <div className="resume-meta">
                <p className="font-mono text-xs leading-relaxed">{award.date}</p>
                <p className="mt-2 text-sm">{award.organization}</p>
              </div>
              <div className="resume-body">
                <h3 className="mb-4 text-xl font-medium leading-snug tracking-tight sm:text-2xl">{award.title}</h3>
                {award.description && <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">{award.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

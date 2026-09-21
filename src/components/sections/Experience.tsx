import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience" className="scroll-mt-24">
      <Container>
        <div className="section-title-row">
          <span className="section-number">01</span>
          <h2 className="section-heading">Experience</h2>
        </div>

        <div>
          {experiences.map((experience) => (
            <article key={experience.id} className="resume-row">
              <div className="resume-meta">
                <p className="font-mono text-xs leading-relaxed">{experience.duration}</p>
                <p className="mt-2 text-sm">{experience.location}</p>
              </div>
              <div className="resume-body">
                <p className="mb-2 text-sm font-medium text-[var(--accent)]">{experience.company}</p>
                <h3 className="mb-5 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                  {experience.position}
                </h3>
                <ul className="space-y-3">
                  {experience.description.map((description) => (
                    <li key={description} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                      <span aria-hidden="true" className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

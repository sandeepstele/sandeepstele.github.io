import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { education } from '@/data/education';

export function Education() {
  return (
    <Section id="education" className="scroll-mt-24 bg-[var(--surface)]">
      <Container>
        <div className="section-title-row">
          <span className="section-number">02</span>
          <h2 className="section-heading">Education</h2>
        </div>

        <div>
          {education.map((item) => (
            <article key={item.id} className="resume-row">
              <div className="resume-meta">
                <p className="font-mono text-xs leading-relaxed">{item.duration}</p>
                <p className="mt-2 text-sm">{item.location}</p>
              </div>
              <div className="resume-body">
                <h3 className="mb-3 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                  {item.institution}
                </h3>
                <p className="leading-relaxed text-[var(--muted)]">{item.degree}</p>
                {item.coursework && item.coursework.length > 0 && (
                  <div className="mt-5">
                    <p className="eyebrow mb-3">Selected coursework</p>
                    <ul className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <li key={course} className="pill">{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

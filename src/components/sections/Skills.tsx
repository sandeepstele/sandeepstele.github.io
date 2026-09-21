import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { skills } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills" className="scroll-mt-24">
      <Container>
        <div className="section-title-row">
          <span className="section-number">03</span>
          <h2 className="section-heading">Tools of the trade</h2>
        </div>

        <div>
          {skills.map((group) => (
            <div key={group.category} className="skill-row">
              <h3 className="text-sm font-medium leading-7">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="pill">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

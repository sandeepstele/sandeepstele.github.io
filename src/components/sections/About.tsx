import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

export function About() {
  return (
    <Section id="about" className="border-y border-[var(--line)]">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="eyebrow mb-5 text-[var(--accent)]">02 / A little background</p>
            <h2 className="section-heading">Research-minded.<br /><em>Built for the real world.</em></h2>
            <Link to="/about" className="text-link mt-7">The longer story <ArrowUpRight size={15} /></Link>
          </div>
          <div>
            <p className="text-[15px] leading-8">My work moves between machine learning and the software around it: training models, building retrieval workflows, and getting them into production.</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">At S2T AI, that meant LLM and ML pipelines across approximately 20 microservices. At Vessel Match, it meant bringing hours of manual vessel matching down to minutes. I’m now pursuing a Master of Computer Science at UIUC, working at DRES, and serving as an Academic Assistant & Grader for BADM 557.</p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-6">
              <div><p className="serif text-4xl text-[var(--accent)]">~40K</p><p className="mt-2 text-xs leading-5 text-[var(--muted)]">requests / day supported<br />across S2T AI workflows</p></div>
              <div><p className="serif text-4xl text-[var(--accent)]">200+</p><p className="mt-2 text-xs leading-5 text-[var(--muted)]">vessels / day processed<br />at Vessel Match</p></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

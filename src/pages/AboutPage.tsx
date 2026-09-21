import { Helmet } from 'react-helmet-async';
import { ArrowDown, ArrowDownToLine } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Publications } from '@/components/sections/Publications';
import { Awards } from '@/components/sections/Awards';

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Research' },
  { id: 'awards', label: 'Beyond the code' },
];

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Sandeep Satheesh</title>
        <meta
          name="description"
          content="Sandeep Satheesh: Master of Computer Science student at UIUC, with experience building production AI systems, backend services, and retrieval workflows."
        />
      </Helmet>

      <div className="page-intro">
        <Container>
          <p className="eyebrow mb-6">About / Background</p>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
            <h1 className="serif max-w-2xl text-5xl leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              The work,<br />
              <span className="italic text-[var(--accent)]">and what led here.</span>
            </h1>
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <p>
                I’m Sandeep, a Master of Computer Science (MCS) student at the University of Illinois
                Urbana-Champaign. I’m also a Graduate Intern at Disability Resources &amp;
                Educational Services (DRES) and an Academic Assistant &amp; Grader for
                BADM 557: Topics in Business Intelligence.
              </p>
              <p>
                Before UIUC, I built production AI systems at S2T AI and vessel–cargo matching
                workflows as a founding engineer at Vessel Match. My work connects machine
                learning, retrieval, and the backend services that put them to use.
              </p>
              <a href="/assets/resume.pdf" download className="text-link">
                Download résumé <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="About page sections" className="mt-12 border-y border-[var(--line)] py-5 lg:mt-16">
            <ul className="flex flex-wrap gap-x-7 gap-y-4">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="font-mono text-[0.65rem] opacity-70">0{index + 1}</span>
                    {section.label}
                    <ArrowDown size={13} aria-hidden="true" className="transition-transform group-hover:translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      <Experience />
      <Education />
      <Skills />
      <Publications />
      <Awards />
    </>
  );
}

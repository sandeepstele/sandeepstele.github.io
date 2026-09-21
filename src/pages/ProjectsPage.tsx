import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/common/Container';
import { Projects } from '@/components/sections/Projects';

export function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects — Sandeep Satheesh</title>
        <meta name="description" content="Tool Abstention, GuruHeal, and Agentic Automation: language-model experiments and software projects by Sandeep Satheesh." />
      </Helmet>
      <Container className="page-intro">
        <p className="eyebrow mb-5 text-[var(--accent)]">Experiments & implementations</p>
        <h1 className="serif text-5xl tracking-[-.045em] md:text-7xl">A few things <em>I’ve built.</em></h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">Fine-tuning decisions. Connecting knowledge. Automating the repetitive parts. Three projects, with the code and the details behind them.</p>
      </Container>
      <Projects />
    </>
  );
}

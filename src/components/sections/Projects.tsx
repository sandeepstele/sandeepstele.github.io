import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, GitBranch, Github, Network, Terminal } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { projects } from '@/data/projects';

function ProjectVisual({ id }: { id: string }) {
  if (id === 'tool-abstention') return (
    <div className="project-visual" aria-hidden="true">
      <div className="w-full max-w-[245px] text-center">
        <div className="inline-flex items-center gap-2 rounded-sm border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-xs"><GitBranch size={14} className="text-[var(--accent)]" /> One model. Five decisions.</div>
        <div className="mx-auto h-5 w-px bg-[var(--accent)]" />
        <div className="flex flex-wrap justify-center gap-1.5">{['Call a tool', 'Answer', 'Clarify', 'Refuse', 'No action'].map(label => <span key={label} className="project-visual-label !px-2 !py-1.5">{label}</span>)}</div>
      </div>
    </div>
  );
  if (id === 'guruheal') return (
    <div className="project-visual !bg-[var(--paper)]" aria-hidden="true">
      <div className="flex w-full max-w-[260px] flex-col items-center">
        <div className="flex items-center gap-3"><span className="project-visual-label">Knowledge</span><Network size={32} strokeWidth={1} className="text-[var(--accent)]" /><span className="project-visual-label">Retrieval</span></div>
        <div className="h-5 w-px bg-[var(--accent)]" />
        <div className="project-visual-label w-full text-center">Multilingual conversations</div>
      </div>
    </div>
  );
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="w-full max-w-[255px] overflow-hidden rounded border border-[var(--line)] bg-[var(--surface)]">
        <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]"><Terminal size={12} /><span>request → validate → execute</span></div>
        <div className="flex flex-wrap gap-2 p-4">{['SQL', 'OCR', 'Embeddings', 'Web', 'Files'].map(label => <span key={label} className="pill">{label}</span>)}</div>
      </div>
    </div>
  );
}

export function Projects({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState('All');
  const ProjectHeading = preview ? 'h3' : 'h2';
  const categories = ['All', ...new Set(projects.flatMap(project => project.category ? [project.category] : []))];
  const visibleProjects = projects.filter(project => preview ? project.featured : category === 'All' || project.category === category);

  return (
    <Section id={preview ? 'selected-work' : 'projects'} className={preview ? '' : '!pt-5'}>
      <Container>
        {preview ? <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow mb-4 text-[var(--accent)]">01 / Selected work</p><h2 className="section-heading">Ideas, put <em>to work.</em></h2></div>
          <Link to="/projects" className="text-link">All projects & details <ArrowUpRight size={15} /></Link>
        </div> : <div role="group" aria-label="Filter projects by area" className="mb-8 flex flex-wrap gap-2">
          {categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className="project-filter">{item}</button>)}
        </div>}
        {!preview && <p role="status" aria-live="polite" className="sr-only">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} shown</p>}
        <div className="grid gap-5 md:grid-cols-3">
          {visibleProjects.map(project => (
            <article key={project.id} id={preview ? undefined : project.id} className="project-card scroll-mt-28">
              <ProjectVisual id={project.id} />
              <div className="flex flex-1 flex-col p-6">
                <div className="eyebrow mb-4 flex justify-between gap-2 text-[var(--muted)]"><span>0{projects.indexOf(project) + 1}</span><span>{project.duration}</span></div>
                <ProjectHeading className="serif text-[27px] leading-tight tracking-[-.035em]">{project.title}</ProjectHeading>
                <p className="mb-5 mt-3 text-[13px] leading-6 text-[var(--muted)]">{project.description}</p>
                <p className="mb-5 border-l-2 border-[var(--accent)] pl-3 text-xs leading-6">{project.outcome}</p>
                <div className="mb-6 flex flex-wrap gap-1.5">{(preview ? project.stack.slice(0, 4) : project.stack).map(tech => <span key={tech} className="pill">{tech}</span>)}</div>
                {!preview && project.detail && <details className="mb-6 border-t border-[var(--line)] pt-4">
                  <summary className="cursor-pointer text-xs font-medium text-[var(--accent)]">Technical notes</summary>
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{project.detail}</p>
                </details>}
                <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-4">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`View ${project.title} source code on GitHub`}><Github size={14} /> Code <ArrowUpRight size={12} /></a>}
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">Presentation <ArrowUpRight size={12} /></a>}
                  {preview && <Link to={`/projects#${project.id}`} className="ml-auto inline-flex p-1 text-[var(--muted)] hover:text-[var(--accent)]" aria-label={`Read about ${project.title}`}><ArrowRight size={16} /></Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {!preview && <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[var(--line)] pt-6">
          <p className="text-xs text-[var(--muted)]">Also in the mix: knee osteoarthritis detection & grading.</p>
          <Link to="/about#publications" className="text-link">Explore the research <ArrowDown size={14} className="-rotate-90" /></Link>
        </div>}
      </Container>
    </Section>
  );
}

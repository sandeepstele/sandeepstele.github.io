import { ArrowDown, ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="relative pt-14 md:pt-24" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-16 pb-16 md:grid-cols-[1.35fr_1fr] md:gap-20 md:pb-24">
          <div>
            <p className="eyebrow mb-7 flex items-center gap-3 text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              Software engineer & ML builder
            </p>
            <h1 id="hero-title" className="serif text-[clamp(64px,8.4vw,112px)] leading-[.96] tracking-[-.065em]">
              Sandeep<br /><span className="italic text-[var(--accent)]">Satheesh.</span>
            </h1>
            <p className="mt-8 max-w-[440px] text-xl leading-relaxed tracking-[-.025em]">
              From a model that knows when to act<br className="hidden lg:block" /> to the systems that put it to work.
            </p>
            <p className="mt-4 max-w-[420px] text-sm leading-7 text-[var(--muted)]">
              MCS student at UIUC and Graduate Intern at DRES. Previously building production AI at S2T AI and vessel-matching workflows at Vessel Match.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#selected-work" className="button">Explore my work <ArrowDown size={15} /></a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="button button-secondary"><FileText size={15} /> Résumé <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <aside className="note-card mx-auto w-full max-w-[390px]" aria-label="A closer look at Tool Abstention">
            <div className="eyebrow flex items-center justify-between border-b border-[var(--line)] pb-4 text-[var(--muted)]"><span>From the workbench</span><span>01 / 03</span></div>
            <p className="eyebrow mb-3 mt-7 text-[var(--accent)]">Tool Abstention · Aug 2026</p>
            <h2 className="serif text-[32px] leading-[1.12] tracking-[-.04em]">Knowing when<br /> <em>not</em> to call a tool.</h2>
            <p className="mt-4 text-xs leading-6 text-[var(--muted)]">A 1.5B-parameter model trained to choose its next action—including no action at all.</p>
            <div className="my-6 space-y-4" aria-label="Internal validation accuracy: baseline 62.5 percent, after supervised fine-tuning 94.7 percent, across three seeds">
              <div><div className="mb-2 flex justify-between text-[11px]"><span className="text-[var(--muted)]">Baseline</span><span>62.5%</span></div><div className="h-2 bg-[var(--line)]"><div className="h-full w-[62.5%] bg-[var(--muted)]" /></div></div>
              <div><div className="mb-2 flex justify-between text-[11px]"><span className="text-[var(--muted)]">After supervised fine-tuning</span><span className="text-[var(--accent)]">94.7%</span></div><div className="h-2 bg-[var(--line)]"><div className="h-full w-[94.7%] bg-[var(--accent)]" /></div></div>
              <p className="text-[10px] leading-5 text-[var(--muted)]">Internal validation accuracy · three seeds<br />92.1% average decision accuracy on 640 BFCL records.</p>
            </div>
            <Link to="/projects#tool-abstention" className="text-link w-full justify-between border-t border-[var(--line)] pt-4">Inside the experiment <ArrowRight size={15} /></Link>
          </aside>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5 border-y border-[var(--line)] py-5 text-[var(--muted)]">
          <span className="eyebrow">Based in Urbana-Champaign, IL</span>
          <span className="eyebrow">Master of Computer Science · UIUC ’28</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="eyebrow flex items-center gap-2 hover:text-[var(--accent)]">Find me on GitHub <ArrowUpRight size={13} /></a>
        </div>
      </Container>
    </section>
  );
}

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function NotFound() {
  return (
    <>
      <Helmet><title>Page not found — Sandeep Satheesh</title><meta name="robots" content="noindex" /></Helmet>
      <Container className="flex min-h-[70svh] flex-col items-start justify-center">
        <p className="eyebrow mb-5 text-[var(--accent)]">404 / A wrong turn</p>
        <h1 className="section-heading">Nothing here <em>just yet.</em></h1>
        <p className="mb-8 mt-5 text-sm text-[var(--muted)]">This page doesn’t exist. My projects are a better place to start.</p>
        <Link to="/" className="button"><ArrowLeft size={15} /> Back home</Link>
      </Container>
    </>
  );
}

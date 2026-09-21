import { Helmet } from 'react-helmet-async';
import { Contact } from '@/components/sections/Contact';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — Sandeep Satheesh</title>
        <meta name="description" content="Contact Sandeep Satheesh about machine learning, software engineering, and collaborations." />
      </Helmet>
      <div className="flex min-h-[calc(100svh-170px)] flex-col justify-center"><Contact standalone /></div>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import { Contact } from '@/components/sections/Contact';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact • Sandeep S</title>
        <meta name="description" content="Get in touch with Sandeep S for collaborations, opportunities, or just to say hello." />
      </Helmet>
      
      <div className="pt-24">
        <Contact />
      </div>
    </>
  );
}

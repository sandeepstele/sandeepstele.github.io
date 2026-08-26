import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Sandeep S • Software Engineer & ML Specialist</title>
        <meta
          name="description"
          content="Sandeep S - MSCS student at University of Illinois Urbana-Champaign and Graduate Intern at DRES. Previously Software Engineer at S2T AI and Founding Engineer at Vessel Match."
        />
        <meta property="og:title" content="Sandeep S • Software Engineer & ML Specialist" />
        <meta property="og:description" content="MSCS student at UIUC and Graduate Intern at DRES. Previously Software Engineer at S2T AI and Founding Engineer at Vessel Match." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <About />
      <Contact />
    </>
  );
}

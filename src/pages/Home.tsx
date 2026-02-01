import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Sandeep S • Software Engineer & ML Specialist</title>
        <meta
          name="description"
          content="Sandeep S - Software Engineer Intern at S2T AI Singapore. ML engineer specializing in LLM agents, RAG search, geospatial analytics, and medical AI."
        />
        <meta property="og:title" content="Sandeep S • Software Engineer & ML Specialist" />
        <meta property="og:description" content="Software Engineer Intern at S2T AI Singapore. ML engineer specializing in LLM agents, RAG search, geospatial analytics, and medical AI." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

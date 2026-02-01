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
          content="Sandeep S - Software Engineer at S2T AI and Founding Engineer at Vessel Match. Specializing in LLM agents, RAG, microservices, and AI-powered systems."
        />
        <meta property="og:title" content="Sandeep S • Software Engineer & ML Specialist" />
        <meta property="og:description" content="Software Engineer at S2T AI and Founding Engineer at Vessel Match. Building AI-powered systems with LLMs, RAG, and microservices." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <About />
      <Contact />
    </>
  );
}

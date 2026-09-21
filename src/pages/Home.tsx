import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Projects } from '@/components/sections/Projects';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Sandeep Satheesh — Software & Machine Learning</title>
        <meta name="description" content="Sandeep Satheesh: MCS student at UIUC and Graduate Intern at DRES. Explore production AI systems, language-model experiments, and software projects." />
        <meta property="og:title" content="Sandeep Satheesh — Software & Machine Learning" />
        <meta property="og:description" content="MCS student at UIUC. Software engineer building ML systems, retrieval workflows, and models that know when to act." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <Projects preview />
      <About />
      <Contact />
    </>
  );
}

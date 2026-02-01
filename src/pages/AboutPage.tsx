import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Publications } from '@/components/sections/Publications';
import { Awards } from '@/components/sections/Awards';
import { fadeInUp } from '@/utils/animations';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About • Sandeep S</title>
        <meta name="description" content="Learn more about Sandeep S - experience, education, skills, publications, and achievements." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Software Engineer at S2T AI and Founding Engineer at Vessel Match. Building AI-powered systems
              with LLM agents, RAG pipelines, microservices architecture, and MLOps/DevOps workflows.
              Published researcher and datathon winner focused on reliable, scalable solutions.
            </p>
          </motion.div>
        </Container>
        
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <Awards />
      </div>
    </>
  );
}

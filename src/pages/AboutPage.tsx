import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Publications } from '@/components/sections/Publications';
import { Awards } from '@/components/sections/Awards';
import { Courses } from '@/components/sections/Courses';
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
              I work across machine learning, data engineering, and product. My projects include LLM agents, 
              vector search, geospatial analysis, and medical imaging. I focus on simple, reliable services 
              with clean interfaces and good documentation.
            </p>
          </motion.div>
        </Container>
        
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <Awards />
        <Courses />
      </div>
    </>
  );
}

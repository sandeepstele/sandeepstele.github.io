import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Projects } from '@/components/sections/Projects';
import { fadeInUp } from '@/utils/animations';

export function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects • Sandeep S</title>
        <meta name="description" content="Explore my portfolio of machine learning, data engineering, and software development projects." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my work in machine learning, data engineering, and software development
            </p>
          </motion.div>
        </Container>
        
        <Projects />
      </div>
    </>
  );
}

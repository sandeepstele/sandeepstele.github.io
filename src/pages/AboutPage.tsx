import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Publications } from '@/components/sections/Publications';
import { Awards } from '@/components/sections/Awards';
import { fadeInUp } from '@/utils/animations';
import { Briefcase, GraduationCap, Code, FileText, Award } from 'lucide-react';

const sections = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'awards', label: 'Awards', icon: Award },
];

export function AboutPage() {
  const [activeSection, setActiveSection] = useState('experience');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
            className="text-center mb-8"
          >
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Software Engineer at S2T AI and Founding Engineer at Vessel Match. Building AI-powered systems
              with LLM agents, RAG pipelines, microservices architecture, and MLOps/DevOps workflows.
              Published researcher and datathon winner focused on reliable, scalable solutions.
            </p>
          </motion.div>

          {/* Section Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg scale-105'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon size={18} />
                    {section.label}
                  </button>
                );
              })}
            </div>
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

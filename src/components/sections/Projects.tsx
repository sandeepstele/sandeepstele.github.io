import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { projects } from '@/data/projects';

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Card>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {project.duration}
                </p>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp, slideInLeft } from '@/utils/animations';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience" className="bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={index % 2 === 0 ? slideInLeft : fadeInUp}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 hidden md:block z-10" />
                
                <div className="md:ml-16">
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                        <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.position}
                            </h3>
                            <p className="text-lg text-primary-light dark:text-primary-dark mb-2">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full whitespace-nowrap">
                            <Calendar size={14} />
                            {exp.duration}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-1">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                          {exp.location}
                        </p>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                              <span className="mr-2 text-blue-500 dark:text-blue-400">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp, slideInLeft } from '@/utils/animations';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <Section id="experience" className="bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={index % 2 === 0 ? slideInLeft : fadeInUp}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-primary-light dark:text-primary-dark mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {exp.duration} • {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

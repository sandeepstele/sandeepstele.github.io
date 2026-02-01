import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { education } from '@/data/education';

export function Education() {
  return (
    <Section id="education" className="bg-gray-50 dark:bg-gray-800">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div key={edu.id} variants={fadeInUp}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-primary-light dark:text-primary-dark mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {edu.duration} • {edu.location}
                    </p>
                    {edu.coursework && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Selected Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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

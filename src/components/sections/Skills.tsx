import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { skills } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills" className="bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeInUp}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

import { motion } from 'framer-motion';
import { Award as AwardIcon } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { awards } from '@/data/awards';

export function Awards() {
  return (
    <Section id="awards" className="bg-white dark:bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Awards & Achievements</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {awards.map((award) => (
            <motion.div key={award.id} variants={fadeInUp}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <AwardIcon className="text-yellow-600 dark:text-yellow-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-primary-light dark:text-primary-dark mb-2">
                      {award.organization}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {award.date}
                    </p>
                    {award.description && (
                      <p className="text-gray-700 dark:text-gray-300">
                        {award.description}
                      </p>
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

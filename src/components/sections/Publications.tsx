import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { publications } from '@/data/publications';

export function Publications() {
  return (
    <Section id="publications" className="bg-gray-50 dark:bg-gray-800">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Publications</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {publications.map((pub) => (
            <motion.div key={pub.id} variants={fadeInUp}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <FileText className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                      {pub.venue} • {pub.year}
                    </p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline"
                      >
                        <ExternalLink size={16} />
                        View Publication
                      </a>
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

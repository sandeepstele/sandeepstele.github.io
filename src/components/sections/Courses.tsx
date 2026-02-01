import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Card } from '@/components/common/Card';
import { staggerContainer, fadeInUp } from '@/utils/animations';
import { courses } from '@/data/courses';

export function Courses() {
  return (
    <Section id="courses" className="bg-gray-50 dark:bg-gray-800">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">Courses</h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={fadeInUp}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {course.name}
                    </h3>
                    <p className="text-sm text-primary-light dark:text-primary-dark mb-1">
                      {course.institution}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      {course.duration}
                    </p>
                    {course.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {course.description}
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

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export function Contact() {
  return (
    <Section id="contact" className="bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
            Get In Touch
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-700 dark:text-gray-300 mb-2">
              <Mail size={20} className="text-primary-light dark:text-primary-dark" />
              <a href="mailto:sandeep.sath7@gmail.com" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                sandeep.sath7@gmail.com
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => window.location.href = 'mailto:sandeep.sath7@gmail.com'}
              className="flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open('/assets/resume.pdf')}
            >
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 dark:text-gray-400"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Chennai, India</span>
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/sandeepstele"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeepstele/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sandeep.sath7@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

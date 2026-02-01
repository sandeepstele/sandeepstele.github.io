import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { fadeInUp, staggerContainer, defaultTransition } from '@/utils/animations';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated circles for visual interest */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full blur-3xl"
      />
      
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            Sandeep S
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
          >
            I build practical ML and data systems
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Software Engineer at <strong>S2T AI</strong> and Founding Engineer at <strong>Vessel Match</strong>.
            Building AI-powered systems with LLMs, RAG, and microservices architecture.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button onClick={scrollToAbout}>
              Learn More
            </Button>
            <Button variant="secondary" onClick={() => window.open('/assets/resume.pdf')}>
              View Resume
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 1.5 } }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="text-gray-600 dark:text-gray-400" />
      </motion.button>
    </section>
  );
}

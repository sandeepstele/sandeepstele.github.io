import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { fadeInUp } from '@/utils/animations';

export function About() {
  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              I work across <strong>machine learning</strong>, <strong>data engineering</strong>, and <strong>product</strong>.
              Currently building AI-powered systems at <strong>S2T AI</strong> and leading R&D at <strong>Vessel Match</strong>
              (incubated at Nirmaan IIT Madras). My work includes <strong>LLM agents</strong>, <strong>RAG pipelines</strong>,
              <strong>microservices architecture</strong>, and <strong>MLOps/DevOps workflows</strong>.
            </p>
            
            <p>
              I led <strong>Paradox'25</strong> at IIT Madras (~5,000 attendees) and published research on
              <strong>multimodal osteoarthritis detection</strong> (IEEE CSNT 2025). Won the <strong>Karnataka State Police Datathon</strong>
              among 30,000+ submissions. I focus on building reliable, scalable systems with clean interfaces and good documentation.
            </p>
            
            <div className="flex justify-center pt-6">
              <Button onClick={() => window.location.href = '/about'}>
                More About Me →
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

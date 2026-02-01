import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { fadeInUp, defaultTransition } from '@/utils/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
      transition={defaultTransition}
      className={clsx('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  );
}

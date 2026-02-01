import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={{ duration: 0.2 }}
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg',
        'border border-gray-200 dark:border-gray-700',
        'transition-shadow duration-300',
        hover && 'hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

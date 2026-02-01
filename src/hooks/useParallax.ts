import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

export function useParallax(
  ref: RefObject<HTMLElement>,
  distance = 100
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 1], [0, distance]);
}

import { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'knee-osteoarthritis',
    title: 'Knee Osteoarthritis Detection & Grading',
    venue: 'IEEE CSNT ’25 · Indian Patent',
    year: '2024 – 2025',
    description:
      'Developed ML pipelines across knee X-rays and clinical/radiological data, training EfficientNetB3 with ImageNet transfer learning, XGBoost, and FCNN models for binary detection and five-class severity grading. Achieved 95.2% detection accuracy, 84% grading accuracy, and 0.924 AUC in clinical deep-learning experiments.',
    link: 'https://ieeexplore.ieee.org/document/10968009',
  },
];

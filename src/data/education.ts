import { Education } from '@/types';

export const education: Education[] = [
  {
    id: 'uiuc-mscs',
    institution: 'University of Illinois, Urbana-Champaign',
    degree: 'Master of Computer Science',
    duration: '2026 – 2028',
    location: 'Urbana-Champaign, Illinois',
  },
  {
    id: 'iit-madras',
    institution: 'Indian Institute of Technology, Madras',
    degree: 'B.Sc in Programming & Data Science (Concurrent Degree) · GPA: 3.6/4.0',
    duration: '2022 – 2026',
    location: 'Chennai, India',
    coursework: [
      'Machine Learning',
      'Application Development',
      'Business Analytics',
      'Data Structures & Algorithms',
      'DBMS',
      'Linux',
    ],
  },
  {
    id: 'anna-university',
    institution: 'Anna University',
    degree: 'B.E in Electronics and Communication Engineering · GPA: 3.73/4.0',
    duration: '2021 – 2025',
    location: 'Chennai, India',
    coursework: [
      'Analog & Digital Circuits',
      'Control Systems',
      'Digital Signal Processing',
      'VLSI Design',
      'Medical Electronics',
    ],
  },
];

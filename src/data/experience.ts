import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 's2t-ai',
    company: 'S2T AI - AI Powered Investigations',
    position: 'Software Engineer L1',
    duration: 'Sept 2025 – Present',
    location: 'Singapore',
    description: [
      'Streamlined data ingestion by building web crawlers and reverse-engineering APIs to ensure consistent data collection, optimized backend integration, and high-efficiency pipelines',
      'Created an Agentic AI (MCP Driven) workflow for applications',
      'Scaled, managed and maintained microservices via Kubernetes, managing DevOps/MLOps workflows',
    ],
  },
  {
    id: 'vessel-match',
    company: 'Vessel Match (Incubated at Nirmaan IIT Madras)',
    position: 'Founding Engineer - Head of Research & Workflows',
    duration: 'May 2024 – Present',
    location: 'Chennai, India',
    description: [
      'Led R&D of a production-ready multi-agentic workflow, combining RAG + agent orchestration to automate end-to-end maritime logistics and data processing',
      'Worked on event-driven microservices architecture using AWS (Lambda, EC2) + FastAPI for a production platform',
      'Scaled pipelines to process 200+ vessels/day; contributed to securing INR 700,000 seed funding and $2K AWS credits',
    ],
  },
  {
    id: 'iit-madras-ta',
    company: 'IIT Madras',
    position: 'Teaching Assistant — Business Data Management (MS2001)',
    duration: 'Jan 2024 – Sept 2025',
    location: 'Chennai',
    description: [
      'Teaching Assistant for "Business Data Management" (Prof. Dr. G. Venkatesh Prof.Dr. Miland Gandhe)',
      'TA sessions, concept clarification, student support; dataset design validation',
      'Python and LLM automation for backend verification',
    ],
  },
  {
    id: 'paradox-secretary',
    company: 'Paradox, IIT Madras',
    position: 'Secretary',
    duration: 'Jan 2023 – Present',
    location: 'Chennai',
    description: [
      'As Secretary of Paradox\'25 I headed one of the largest student fest with a footfall of 4000+ students all across India, with 14 departments, 50+ events and over 5 Pro shows',
      'Currently serving on the Steering Committee for Paradox\'26 — overseeing the fest and serving as the Head of Financial Audits',
    ],
  },
  {
    id: 'hcl',
    company: 'HCL Technologies',
    position: 'Project Intern',
    duration: 'Jun 2023 – Jul 2023',
    location: 'Chennai',
    description: [
      'Built a Course Recommendation System using classical ML and analytics.',
    ],
  },
];

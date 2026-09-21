import { Experience } from '@/types';

export const experiences: Experience[] = [
  // The user confirmed this ongoing role in addition to the selected resume.
  {
    id: 'dres-uiuc',
    company: 'Disability Resources & Educational Services (DRES), UIUC',
    position: 'Graduate Intern',
    duration: 'Aug 2026 – Present',
    location: 'Urbana-Champaign, Illinois',
    description: [
      'Developing OCR-based document processing and automated note-generation pipelines, integrating model inference, validation, and workflow automation to accelerate accessibility document preparation and reduce manual processing.',
    ],
  },
  {
    id: 'uiuc-academic-assistant',
    company: 'University of Illinois Urbana-Champaign',
    position: 'Academic Assistant & Grader — BADM 557: Topics in Business Intelligence',
    duration: 'Sept 2026 – Present',
    location: 'Urbana-Champaign, Illinois',
    description: [
      'Graded coursework in business intelligence, data mining, and predictive modeling.',
    ],
  },
  {
    id: 's2t-ai',
    company: 'S2T AI',
    position: 'Software Engineer L1',
    duration: 'Sept 2025 – Aug 2026',
    location: 'Singapore',
    description: [
      'Built production LLM and ML pipelines for structured data extraction, retrieval, speech transcription, and AI-assisted workflows, integrating LLM tool calling, speech-recognition models, RAG, and CopilotKit across Python/FastAPI services.',
      'Productionized workflows across ~20 microservices and 200+ APIs, supporting ~40K requests/day and ingestion of ~100K new data sources/day. Used Kafka, Celery, Redis, MongoDB, Elasticsearch, Docker, and Kubernetes to sustain ~99.8% reliability.',
    ],
  },
  {
    id: 'vessel-match',
    company: 'Vessel Match (Start-up at Nirmaan IIT Madras)',
    position: 'Founding Engineer — Head of Research & Workflows',
    duration: 'May 2024 – Aug 2025',
    location: 'Chennai, India',
    description: [
      'Built backend APIs and RAG-based workflows for maritime vessel–cargo matching, combining private and public vessel-tracking APIs with customer data and LLM-based retrieval, validation, and structured extraction.',
      'Reduced vessel-matching turnaround from hours of manual email/search work to minutes, while processing 200+ vessels/day and improving matches based on cargo and customer preferences.',
    ],
  },
  {
    id: 'iit-madras-ta',
    company: 'Indian Institute of Technology, Madras',
    position: 'Teaching Assistant — Business Data Management (MS2001)',
    duration: 'Jan 2024 – Sept 2025',
    location: 'Chennai, India',
    description: [
      'Automated grading and dataset curation using Python and LLM scripts, improving speed and data integrity.',
    ],
  },
];

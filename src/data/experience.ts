import { Experience } from '@/types';

export const experiences: Experience[] = [
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
    id: 's2t-ai',
    company: 'S2T AI',
    position: 'Software Engineer L1',
    duration: 'Sept 2025 – Aug 2026',
    location: 'Singapore',
    description: [
      'Built and deployed ~20 Python/FastAPI microservices for automated data-ingestion and backend workflows, using Kafka, Celery, Redis, MongoDB, and Elasticsearch for asynchronous processing, caching, persistence, and search.',
      'Maintained 200+ production APIs serving internal and external customers and handling ~40K requests/day, while supporting ingestion systems processing ~100K new data sources/day.',
      'Built internal failure-tracking and notification tooling for ingestion pipelines, helping sustain ~99.8% reliability across systems processing ~100K new data sources/day, with Prometheus/Grafana observability and Docker/Kubernetes deployment.',
    ],
  },
  {
    id: 'vessel-match',
    company: 'Vessel Match (Start-up at Nirmaan IIT Madras)',
    position: 'Founding Engineer',
    duration: 'May 2024 – Aug 2025',
    location: 'Chennai, India',
    description: [
      'Architected backend APIs and orchestration workflows for maritime vessel–cargo matching, integrating private/public vessel-tracking APIs with prospective-client data sources.',
      'Built structured tool interfaces for agents to retrieve, validate, and normalize vessel, cargo, and availability data before executing matching workflows.',
      'Reduced vessel-matching turnaround from hours of manual email/search work to minutes, while processing 200+ vessels/day and improving match relevance for cargo and customer preferences.',
    ],
  },
  {
    id: 'iit-madras-ta',
    company: 'Indian Institute of Technology, Madras',
    position: 'Teaching Assistant — Business Data Management (MS2001)',
    duration: 'Jan 2024 – Sept 2025',
    location: 'Chennai, India',
    description: [
      'Built Python + LLM evaluation scripts to automate submission checks and curate datasets, improving grading speed and data integrity while supporting student doubt-clearing sessions.',
    ],
  },
];

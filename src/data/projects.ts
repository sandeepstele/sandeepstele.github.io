import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'llm-automation',
    title: 'LLM-Based Automation Agent',
    description: 'Built and deployed a secure LLM-powered automation agent using GPT-4o-Mini for tasks like file operations, web scraping, database queries, and text processing, containerized with Docker and integrated into CI pipelines.',
    stack: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'SQLite', 'CI/CD'],
    duration: 'Feb 2025 – Mar 2025',
    github: 'https://github.com/sandeepstele/LLM-Automation-Agent',
    featured: true,
  },
  {
    id: 'crime-analysis',
    title: 'Crime Analysis & Prediction — Karnataka Police Datathon (Winner)',
    description: 'Portal and dashboard for police FIR data with geospatial and behaviour analysis, plus time-series forecasts.',
    stack: ['Python', 'Django', 'Pandas', 'Scikit-Learn', 'Prophet', 'Tableau', 'Folium', 'Google Geocoding'],
    duration: 'Feb 2024 - Jun 2024',
    github: 'https://github.com/sandeepstele/KSP-final',
    featured: true,
  },
  {
    id: 'multimodal-oa',
    title: 'Multimodal OA Detection with LLM-Generated Insights',
    description: 'Flask app that fuses X-ray features with clinical data to predict OA and severity. RAG layer drafts personalised reports and powers a simple clinical chatbot.',
    stack: ['TensorFlow', 'XGBoost', 'Python', 'Flask', 'HTML/CSS/JS', 'FAISS', 'OpenAI API'],
    duration: '2024',
    github: 'https://github.com/sandeepstele/oafinalllm',
    featured: true,
  },
  {
    id: 'tds-virtual-ta',
    title: 'TDS Virtual TA',
    description: 'Built an asynchronous FastAPI server as a Virtual Teaching Assistant for the Tools in Data Science course, with web scraping, Pinecone-based vector indexing, and RAG-powered QA for text and image queries.',
    stack: ['FastAPI', 'Python', 'OpenAI', 'Pinecone', 'Web Scraping'],
    duration: 'May 2025 - Sept 2025',
    github: 'https://github.com/sandeepstele/tdsp2t2',
    featured: true,
  },
  {
    id: 'data-extraction',
    title: 'Data Extraction & Analysis Assistant',
    description: 'FastAPI backend with a small HTML page where uploads are processed through LLM-generated Python code in a controlled runner.',
    stack: ['FastAPI', 'Python', 'LLM', 'HTML'],
    duration: '2024',
    featured: false,
  },
];

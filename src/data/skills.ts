import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL (PostgreSQL/MySQL/MongoDB)', 'Neo4j', 'HTML'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'PydanticAI', 'FastAPI', 'React', 'LangChain', 'LangSmith', 'Next.js'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Docker', 'Kubernetes', 'Git', 'Azure DevOps', 'AWS', 'GCP', 'Supabase', 'Redis', 'GitHub', 'TinyML'],
  },
  {
    category: 'ML / AI',
    items: ['RAG (FAISS/Pinecone)', 'LLM Orchestration', 'Prompt Engineering', 'XGBoost', 'Model Evaluation', 'Agentic Workflows'],
  },
  {
    category: 'Data',
    items: ['Pandas', 'NumPy', 'ETL', 'Data Validation', 'Schema Design', 'Time Series Analysis'],
  },
  {
    category: 'Visualization',
    items: ['Matplotlib', 'Tableau', 'Folium', 'Plotly'],
  },
  {
    category: 'Domains',
    items: ['Geospatial Analytics', 'Medical AI', 'Event Operations', 'Business Data Management'],
  },
];

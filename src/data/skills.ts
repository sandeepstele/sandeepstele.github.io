import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'SQL (SQLite/PostgreSQL)', 'Bash', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    items: ['FastAPI', 'Flask', 'Django', 'React', 'Node.js'],
  },
  {
    category: 'ML / AI',
    items: ['Scikit-Learn', 'TensorFlow/Keras', 'XGBoost', 'RAG (FAISS/Pinecone)', 'Prompt Engineering', 'Model Evaluation'],
  },
  {
    category: 'Data',
    items: ['Pandas', 'NumPy', 'ETL', 'Data Validation', 'Schema Design'],
  },
  {
    category: 'Systems',
    items: ['Docker/Podman', 'REST APIs', 'Async I/O', 'CI/CD', 'Git'],
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

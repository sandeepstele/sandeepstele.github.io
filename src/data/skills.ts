import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'Java', 'TypeScript', 'SQL'],
  },
  {
    category: 'ML & LLMs',
    items: ['PyTorch', 'MLX', 'Hugging Face', 'LoRA', 'SFT', 'Preference Optimization (DPO/ORPO/RPO)', 'RAG', 'GraphRAG'],
  },
  {
    category: 'AI Systems',
    items: ['PydanticAI', 'LangChain', 'LangSmith', 'MCP'],
  },
  {
    category: 'Backend & Infrastructure',
    items: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Kafka', 'Celery', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
  },
];

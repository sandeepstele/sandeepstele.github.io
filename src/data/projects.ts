import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'tool-abstention',
    title: 'Tool Abstention',
    category: 'Model training & evaluation',
    description:
      'Teaching a 1.5B-parameter language model when to call a tool, answer directly, ask for missing information, refuse an unavailable action, or take no action.',
    outcome: '62.5% → 94.7% internal validation accuracy with SFT across three seeds.',
    detail:
      'Trained with MLX and LoRA on a 600-task paired dataset with leakage-controlled splits. Verified the rule-based evaluator on 60 human-reviewed examples. SFT averaged 92.1% decision accuracy on 640 BFCL records. Implemented and tested DPO, then rejected it after tool-call accuracy collapsed despite perfect preference accuracy.',
    stack: ['Python', 'MLX', 'LoRA', 'Pydantic', 'Qwen2.5', 'Hugging Face', 'GitHub Actions'],
    duration: 'Aug 2026',
    github: 'https://github.com/sandeepstele/tool-abstention',
    featured: true,
  },
  {
    id: 'guruheal',
    title: 'GuruHeal',
    category: 'Healthcare AI',
    description:
      'A healthcare AI platform combining GraphRAG, web retrieval, and LLM tool calling with streaming multilingual interactions.',
    outcome: 'Retrieval, tool calling, and multilingual conversations in one platform.',
    detail:
      'Built with FastAPI and Next.js/TypeScript, with PostgreSQL/Supabase persistence and Redis caching.',
    stack: ['FastAPI', 'Next.js', 'TypeScript', 'GraphRAG', 'PostgreSQL', 'Supabase', 'Redis'],
    duration: 'May 2025',
    github: 'https://github.com/sandeepstele/guruheal',
    link: 'https://v0-guruheal-presentation.vercel.app/',
    featured: true,
  },
  {
    id: 'agentic-automation',
    title: 'Agentic Automation Platform',
    category: 'Tool use & backend systems',
    description:
      'An LLM-based task execution system that interprets natural-language requests and selects tools for SQL, OCR, embeddings, web extraction, and filesystem operations.',
    outcome: 'Natural-language requests to tool execution, with schema validation.',
    detail:
      'Built with Python, FastAPI, PydanticAI, LangChain, and LiteLLM, with schema validation, containerized execution, and GitHub Actions.',
    stack: ['Python', 'FastAPI', 'PydanticAI', 'LangChain', 'LiteLLM', 'Docker', 'GitHub Actions'],
    duration: 'Feb 2025',
    github: 'https://github.com/sandeepstele/LLM-Automation-Agent',
    featured: true,
  },
];

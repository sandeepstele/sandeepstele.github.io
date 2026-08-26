import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'reverserx',
    title: 'ReverserX',
    description:
      'A standalone Android reverse-engineering platform integrating JADX, ADB, Frida, mitmproxy, and Ghidra for static analysis, runtime instrumentation, network inspection, and native-code analysis. Implements safe APK/APKM ingestion, source indexing, structured evidence collection, and reproducible CLI workflows. Indexed 155K+ source files into 917K+ searchable chunks with SQLite/ChromaDB persistence, checkpoints, failure recovery, bounded execution, and evidence-linked reporting (232 passing tests, 85% coverage).',
    stack: ['Python', 'JADX', 'ADB', 'Frida', 'mitmproxy', 'Ghidra', 'SQLite', 'ChromaDB'],
    duration: 'Aug 2026 – Present',
    github: 'https://github.com/sandeepstele/ReverserX',
    featured: true,
  },
  {
    id: 'guruheal',
    title: 'GuruHeal',
    description:
      'A multi-service healthcare platform with FastAPI and Next.js/TypeScript, using PostgreSQL/Supabase for persistence and Redis for caching, with streaming conversations, document retrieval, external search, multilingual support, and asynchronous backend processing.',
    stack: ['FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Supabase', 'Docker'],
    duration: 'May 2025',
    github: 'https://github.com/sandeepstele/guruheal',
    link: 'https://v0-guruheal-presentation.vercel.app/',
    featured: true,
  },
];

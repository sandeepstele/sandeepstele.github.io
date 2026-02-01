export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  duration: string;
  github?: string;
  link?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  coursework?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface Course {
  id: string;
  name: string;
  institution: string;
  duration: string;
  description?: string;
}

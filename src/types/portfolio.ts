export interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'database' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'volunteer' | 'education';
}

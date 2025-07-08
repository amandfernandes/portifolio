
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  downloadUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level?: number;
  category: 'datascience' | 'dev' | 'tools';
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

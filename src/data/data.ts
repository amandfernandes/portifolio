
import { Project, Skill, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Amanda Fernandes",
  title: "Cientista de Dados",
  description: "Transformando dados em insights e criando soluções tecnológicas inovadoras.",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  email: "amandafernandes2030@gmail.com",
  social: {
    github: "https://github.com/amandfernandes",
    linkedin: "https://linkedin.com/in/amandafpereira",
  }
};

export const skills: Skill[] = [
  // Ciência de Dados e AI
  { name: 'Python', category: 'datascience', level: 90 },
  { name: 'SQL', category: 'datascience', level: 80 },
  { name: 'MySQL', category: 'datascience', level: 70 },
  { name: 'Postgres', category: 'datascience', level: 70 },
  { name: 'Power BI', category: 'datascience', level: 75 },
  { name: 'Orange Data Mining', category: 'datascience', level: 70 },
  { name: 'Pentaho', category: 'datascience', level: 70 },
  { name: 'n8n', category: 'datascience', level: 60 },
  // Desenvolvimento
  { name: 'React', category: 'dev', level: 90 },
  { name: 'Javascript', category: 'dev', level: 90 },
  { name: 'Typescript', category: 'dev', level: 90 },
  { name: 'HTML', category: 'dev', level: 90 },
  { name: 'CSS', category: 'dev', level: 90 },
  { name: 'Spring Boot', category: 'dev', level: 80 },
  { name: 'Node.js', category: 'dev', level: 80 },
  { name: '.NET', category: 'dev', level: 75 },
  { name: 'Java', category: 'dev', level: 80 },
  { name: 'C++', category: 'dev', level: 70 },
  { name: 'C#', category: 'dev', level: 70 },
  // Ferramentas e Outros
  { name: 'Figma', category: 'tools', level: 80 },
  { name: 'Adobe Photoshop', category: 'tools', level: 75 },
  { name: 'Adobe Illustrator', category: 'tools', level: 75 },
  { name: 'Microsoft Office', category: 'tools', level: 85 },
  { name: 'Git', category: 'tools', level: 85 },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Pessoal",
    description: "Portfólio moderno e responsivo, focado em Ciência de Dados e Inteligência Artificial. Ele foi desenvolvido com React, Vite, TypeScript.",
    image: "/public/image-uploads/portfolio.png",
    tags: ["React", "Node.js", "TypeScript", "Vite"],
    githubUrl: "https://github.com/amanda/ecommerce",
    demoUrl: "https://ecommerce-demo.com"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com funcionalidades de drag-and-drop, filtros avançados e colaboração em tempo real.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/amanda/task-manager",
    demoUrl: "https://taskmanager-demo.com"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Dashboard meteorológico com visualizações interativas, previsões detalhadas e histórico de dados climáticos.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tags: ["Vue.js", "D3.js", "OpenWeather API"],
    githubUrl: "https://github.com/amanda/weather-dashboard"
  }
];

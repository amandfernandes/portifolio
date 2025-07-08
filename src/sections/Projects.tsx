
import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styles/GlobalStyles';
import { projects } from '../data/data';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = styled(Section)`
  background-color: ${props => props.theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 800;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
  
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.text} 0%, 
    ${props => props.theme.colors.textSecondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const SectionDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing['3xl']} auto;
  line-height: 1.7;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ViewMoreButton = styled.button`
  display: block;
  margin: ${props => props.theme.spacing['2xl']} auto 0;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projetos</SectionTitle>
        <SectionDescription>
          Aqui estão alguns dos meus projetos recentes que destacam minhas habilidades e criatividade.
          Cada projeto representa um desafio único e uma oportunidade de aprendizado
        </SectionDescription>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
        
        <a href='https://github.com/amandfernandes' target='_blanck'>
          <ViewMoreButton>
            View More
          </ViewMoreButton>
        </a> 
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

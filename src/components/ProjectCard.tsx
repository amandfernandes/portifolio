
import React from 'react';
import styled from 'styled-components';
import { Project } from '../types';
import Button from './Button';
import { ExternalLink, Github, Download } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}aa 0%, 
    ${props => props.theme.colors.secondary}aa 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.text};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Tag = styled.span`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}20 0%, 
    ${props => props.theme.colors.secondary}20 100%
  );
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.primary}40;
`;

const Actions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
`;

const IconButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={project.image} alt={project.title} />
        <Overlay>
          {project.githubUrl && (
            <IconButton
              variant="secondary"
              size="sm"
              href={project.githubUrl}
              target="_blank"
            >
              <Github />
              Código
            </IconButton>
          )}
          {project.demoUrl && (
            <IconButton
              variant="primary"
              size="sm"
              href={project.demoUrl}
              target="_blank"
            >
              <ExternalLink />
              Demo
            </IconButton>
          )}
          {project.downloadUrl && (
            <IconButton
              as="a"
              variant="primary"
              size="sm"
              href={project.downloadUrl}
              download
              target="_blank"
            >
              <Download />
              Download
            </IconButton>
          )}
        </Overlay>
      </ImageContainer>
      
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        
        <TagList>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagList>
        
        <Actions>
          {project.githubUrl && (
            <IconButton
              variant="outline"
              size="sm"
              href={project.githubUrl}
              target="_blank"
            >
              <Github />
              GitHub
            </IconButton>
          )}
          {project.demoUrl && (
            <IconButton
              variant="primary"
              size="sm"
              href={project.demoUrl}
              target="_blank"
            >
              <ExternalLink />
              Demo
            </IconButton>
          )}
          {project.downloadUrl && (
            <IconButton
              variant="primary"
              size="sm"
              href={project.downloadUrl}
              target="_blank"
            >
              <Download />
              Download
            </IconButton>
          )}
        </Actions>
      </Content>
    </Card>
  );
};

export default ProjectCard;

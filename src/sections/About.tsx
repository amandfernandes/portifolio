
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styles/GlobalStyles';
import { skills } from '../data/data';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = styled(Section)`
  background-color: ${props => props.theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['4xl']};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['3xl']};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: ${props => props.theme.borderRadius.lg};
    filter: grayscale(100%);
    transition: filter 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const TextContent = styled.div``;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 800;
  margin-bottom: ${props => props.theme.spacing.xl};
  
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

const AboutText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${props => props.variant === 'primary' ? `
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.text};
    border: 1px solid ${props.theme.colors.primary};
    
    &:hover {
      background: ${props.theme.colors.primaryHover};
    }
  ` : `
    background: transparent;
    color: ${props.theme.colors.textSecondary};
    border: 1px solid ${props.theme.colors.border};
    
    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
    }
  `}
`;

const SkillsContainer = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: ${props => props.theme.spacing.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 8px 25px -8px ${props => props.theme.colors.primary}40;
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
`;

const SkillTag = styled.span`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}20 0%, 
    ${props => props.theme.colors.secondary}10 100%
  );
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.primary}30;
`;

const About: React.FC = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryNames = {
    datascience: 'Ciência de Dados & IA',
    dev: 'Desenvolvimento', 
    tools: 'Ferramentas & Outros',
  };

  const [title] = useState('Sobre mim');
  const [about1] = useState("Sou apaixonada por dados e tecnologia! Atuo como Cientista de Dados, transformando grandes volumes de dados em insights valiosos para tomada de decisão.");
  const [about2] = useState("Tenho experiência em análise, visualização, engenharia de dados e automação de processos, utilizando Python, SQL, Power BI, Pentaho, n8n, Orange Data Mining, entre outras ferramentas. Meu objetivo é criar soluções inovadoras que gerem impacto real nos negócios.");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <ImageContainer>
            <img src="image-uploads/myicon.png" alt="Workspace" />
          </ImageContainer>
          
          <TextContent>
            <SectionTitle>{title}</SectionTitle>
            <AboutText>{about1}</AboutText>
            <AboutText>{about2}</AboutText>
            {/* Principais Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', margin: '1.5rem 0' }}>
              {groupedSkills['datascience']?.slice(0, 5).map((skill, idx) => (
                <SkillTag key={idx} style={{ fontSize: '1rem', fontWeight: 600, background: '#2563eb20', color: '#2563eb' }}>{skill.name}</SkillTag>
              ))}
            </div>
            <ButtonGroup>
              <a href="/curriculo.pdf" download style={{ textDecoration: 'none' }}>
                <ActionButton variant="primary">
                  Baixar Currículo
                </ActionButton>
              </a>
              <ActionButton variant="secondary" onClick={() => scrollToSection('projects')}>
                Projetos
              </ActionButton>
            </ButtonGroup>
          </TextContent>
        </Content>
        <SkillsContainer>
          <SkillsGrid>
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <SkillCard key={category}>
                <h3>{categoryNames[category as keyof typeof categoryNames]}</h3>
                <SkillList>
                  {categorySkills.map((skill, index) => (
                    <SkillTag key={index}>{skill.name}</SkillTag>
                  ))}
                </SkillList>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </AboutSection>
  );
};

export default About;

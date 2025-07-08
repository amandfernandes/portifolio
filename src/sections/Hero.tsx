
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../styles/GlobalStyles';
import { personalInfo } from '../data/data';
import Button from '../components/Button';
import { ChevronDown, Mail, ExternalLink } from 'lucide-react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(3deg);
  }
`;

const geometricFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-30px) translateX(20px) rotate(120deg);
  }
  66% {
    transform: translateY(20px) translateX(-15px) rotate(240deg);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const GeometricElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const GeometricShape = styled.div<{ size: number; top: string; left: string; delay: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}40 0%, 
    ${props => props.theme.colors.secondary}20 100%
  );
  border: 1px solid ${props => props.theme.colors.primary}20;
  animation: ${geometricFloat} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &:nth-child(odd) {
    border-radius: 50%;
  }
  
  &:nth-child(even) {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease;
`;

const Greeting = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  margin-bottom: ${props => props.theme.spacing.lg};

  &::before {
    content: '👋';
    margin-right: ${props => props.theme.spacing.xs};
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['6xl']};
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: ${props => props.theme.spacing.md};
  
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.text} 0%, 
    ${props => props.theme.colors.textSecondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Actions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  cursor: pointer;
  animation: ${float} 3s ease-in-out infinite;
  z-index: 2;

  span {
    color: ${props => props.theme.colors.textMuted};
    font-size: ${props => props.theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <GeometricElements>
        <GeometricShape size={80} top="20%" left="10%" delay={0} />
        <GeometricShape size={60} top="60%" left="85%" delay={1} />
        <GeometricShape size={40} top="80%" left="15%" delay={2} />
        <GeometricShape size={100} top="10%" left="80%" delay={1.5} />
        <GeometricShape size={50} top="40%" left="5%" delay={0.5} />
      </GeometricElements>
      
      <Container>
        <HeroContent>
          <Greeting>Olá, eu sou</Greeting>
          <Title>{personalInfo.name}</Title>
          <Subtitle>{personalInfo.title}</Subtitle>
          <Description>{personalInfo.description}</Description>

          <Actions>
          <a href="/public/CV-AmandaFernandesPereira.pdf" download style={{ textDecoration: 'none' }}>
            <Button>
              Baixar Currículo
            </Button>
          </a>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              <Mail size={18} />
              Contato
            </Button>
          </Actions>
        </HeroContent>

        <ScrollIndicator onClick={() => scrollToSection('about')}>
          <span>Scroll</span>
          <ChevronDown size={20} />
        </ScrollIndicator>
      </Container>
    </HeroSection>
  );
};

export default Hero;

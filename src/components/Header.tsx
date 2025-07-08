
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyles';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.isScrolled ? 
    `${props.theme.colors.backgroundAlt}cc` : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.isScrolled ? 
    `1px solid ${props.theme.colors.border}` : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md} 0;
`;

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 700;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: ${props => props.theme.colors.backgroundAlt};
    padding: ${props => props.theme.spacing.lg};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    gap: ${props => props.theme.spacing.md};
  }
`;

const NavItem = styled.li`
  a {
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 500;
    transition: color 0.2s ease;
    position: relative;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: ${props => props.theme.spacing.xs};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.text};
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Remover o useLanguage e o seletor de idioma

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Container>
        <Nav>
          <Logo>AF</Logo>
          
          <NavList isOpen={isMobileMenuOpen}>
            <NavItem>
              <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            </NavItem>
            <NavItem>
              <a href="#about" onClick={() => scrollToSection('about')}>Sobre</a>
            </NavItem>
            <NavItem>
              <a href="#projects" onClick={() => scrollToSection('projects')}>Projetos</a>
            </NavItem>
            <NavItem>
              <a href="#contact" onClick={() => scrollToSection('contact')}>Contato</a>
            </NavItem>
          </NavList>
          {/* Seletor de idioma removido */}
          <MobileMenuButton
            className={isMobileMenuOpen ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

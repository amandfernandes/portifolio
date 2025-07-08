
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonBase = styled.button<Omit<ButtonProps, 'children'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  font-weight: 500;
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}

  /* Sizes */
  ${props => props.size === 'sm' && css`
    padding: ${props.theme.spacing.xs} ${props.theme.spacing.md};
    font-size: ${props.theme.fontSizes.sm};
  `}

  ${props => props.size === 'lg' && css`
    padding: ${props.theme.spacing.md} ${props.theme.spacing.xl};
    font-size: ${props.theme.fontSizes.lg};
  `}

  ${props => (!props.size || props.size === 'md') && css`
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.lg};
    font-size: ${props.theme.fontSizes.base};
  `}

  /* Variants */
  ${props => (!props.variant || props.variant === 'primary') && css`
    background: linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.secondary} 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props.theme.shadows.lg};
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${props.theme.colors.surface};
    color: ${props.theme.colors.text};
    
    &:hover {
      background-color: ${props.theme.colors.backgroundAlt};
      transform: translateY(-2px);
    }
  `}

  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};
    
    &:hover {
      background-color: ${props.theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  `}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
`;

const Button: React.FC<ButtonProps> = ({ href, children, ...props }) => {
  if (href) {
    return (
      <ButtonBase as="a" href={href} {...props}>
        {children}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase {...props}>
      {children}
    </ButtonBase>
  );
};

export default Button;

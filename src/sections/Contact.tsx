import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styles/GlobalStyles';
import { personalInfo } from '../data/data';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = styled(Section)`
  background-color: ${props => props.theme.colors.backgroundAlt};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContactDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};

  svg {
    color: ${props => props.theme.colors.primary};
    min-width: 20px;
  }

  div {
    h4 {
      font-weight: 600;
      color: ${props => props.theme.colors.text};
      margin-bottom: ${props => props.theme.spacing.xs};
    }

    p {
      color: ${props => props.theme.colors.textSecondary};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    background: linear-gradient(135deg, 
      ${props => props.theme.colors.primary} 0%, 
      ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    transform: translateY(-2px);
    border-color: transparent;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactForm = styled.form`
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};

  label {
    display: block;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  input, textarea {
    width: 100%;
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    background-color: ${props => props.theme.colors.backgroundAlt};
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.lg};
    color: ${props => props.theme.colors.text};
    font-family: inherit;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
    }

    &::placeholder {
      color: ${props => props.theme.colors.textMuted};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
 const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (formData.name === "" || formData.email === "" || formData.subject === "" || formData.message === "") {
            setSubmitStatus({
                success: false,
                message: "Por favor, preencha todos os campos."
            });
            setIsSubmitting(false);
            return;
        }

        const templateParams = {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        };

        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setSubmitStatus({
                    success: true,
                    message: 'Mensagem enviada com sucesso! Retornarei o contato em breve.'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setIsSubmitting(false);
            }, (error) => {
                console.log('EmailJS error:', error);
                setSubmitStatus({
                    success: false,
                    message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
                });
                setIsSubmitting(false);
            });
    };

    // Efeito para remover a mensagem de status após um tempo
    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);
    
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    sendEmail(event);
  }

  return (
    <ContactSection id="contact">
      <Container>
        <Content>
          <ContactInfo>
            <SectionTitle>Vamos Conversar</SectionTitle>
            <ContactDescription>
              Estou sempre aberta a novas oportunidades e projetos interessantes. 
              Entre em contato comigo através de qualquer um dos canais abaixo ou 
              envie uma mensagem diretamente pelo formulário.
            </ContactDescription>

            <ContactList>
              <ContactItem>
                <Mail />
                <div>
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <Phone />
                <div>
                  <h4>Telefone</h4>
                  <p>+55 (21) 97043-8553</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <MapPin />
                <div>
                  <h4>Localização</h4>
                  <p>Rio de Janeiro, Brasil</p>
                </div>
              </ContactItem>
            </ContactList>

            <SocialLinks>
              {personalInfo.social.github && (
                <SocialLink href={personalInfo.social.github} target="_blank">
                  <Github />
                </SocialLink>
              )}
              {personalInfo.social.linkedin && (
                <SocialLink href={personalInfo.social.linkedin} target="_blank">
                  <Linkedin />
                </SocialLink>
              )}
              {personalInfo.social.twitter && (
                <SocialLink href={personalInfo.social.twitter} target="_blank">
                  <Twitter />
                </SocialLink>
              )}
            </SocialLinks>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Assunto da mensagem"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Escreva sua mensagem aqui..."
                required
              />
            </FormGroup>

            <Button type="submit" fullWidth>
              <Send />
              Enviar Mensagem
            </Button>
          </ContactForm>
        </Content>
      </Container>
    </ContactSection>
  );
};

export default Contact;


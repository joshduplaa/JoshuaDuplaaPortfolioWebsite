'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import NavBar from '../../components/NavBar';
import { useTheme } from '../../components/MuiThemeProvider';

export default function Contact() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const secondaryTextColor = isDarkMode ? '#e0e0e0' : '#5f6368';
  const cardBackground = isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)';
  const iconColor = isDarkMode ? '#289726' : '#202124'; // Green in dark mode, dark gray in light mode

  const contactMethods = [
    {
      title: 'Email',
      value: 'joshuaduplaa@outlook.com',
      icon: <EmailIcon sx={{ fontSize: 40, color: iconColor }} />,
      link: 'mailto:joshuaduplaa@outlook.com',
      description: 'Send me an email for professional inquiries, collaborations, or general questions.'
    },
    {
      title: 'LinkedIn',
      value: 'joshua-duplaa-487502178',
      icon: <LinkedInIcon sx={{ fontSize: 40, color: iconColor }} />,
      link: 'https://www.linkedin.com/in/joshua-duplaa-487502178/',
      description: 'Connect with me on LinkedIn for professional networking and updates.'
    },
    {
      title: 'GitHub',
      value: 'joshduplaa',
      icon: <GitHubIcon sx={{ fontSize: 40, color: iconColor }} />,
      link: 'https://github.com/joshduplaa',
      description: 'Check out my code repositories and open-source contributions.'
    },
    {
      title: 'Location',
      value: 'Lubbock, TX',
      icon: <LocationOnIcon sx={{ fontSize: 40, color: iconColor }} />,
      link: null,
      description: 'Based in Lubbock, Texas. Open to remote opportunities and collaborations.'
    },
    {
      title: 'Phone',
      value: '(806) 283-4934',
      icon: <PhoneIcon sx={{ fontSize: 40, color: iconColor }} />,
      link: 'tel:+18062834934',
      description: 'Available for phone calls during business hours. Please email first for scheduling.'
    }
  ];

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ 
        paddingTop: { xs: 2, sm: 4 },
        paddingBottom: { xs: 4, sm: 6 }
      }}>
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center', 
          marginBottom: { xs: 3, sm: 5 },
          padding: { xs: 2, sm: 3 }
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: textColor,
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 'bold',
              marginBottom: 2
            }}
          >
            Get In Touch
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: secondaryTextColor,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            I&apos;m always interested in new opportunities, collaborations, and interesting projects. 
            Whether you have a question about my work, want to discuss a potential collaboration, 
            or just want to say hello, I&apos;d love to hear from you!
          </Typography>
        </Box>

        {/* Contact Methods Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
          marginBottom: { xs: 4, sm: 6 }
        }}>
          {contactMethods.map((method, index) => (
            <Card key={index} sx={{ 
              backgroundColor: cardBackground,
              height: '100%',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: isDarkMode 
                  ? '0 8px 25px rgba(0, 0, 0, 0.3)' 
                  : '0 8px 25px rgba(0, 0, 0, 0.1)'
              }
            }}>
              <CardContent sx={{ 
                textAlign: 'center', 
                padding: { xs: 2, sm: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Box sx={{ marginBottom: 2 }}>
                    {method.icon}
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: textColor,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      fontWeight: 'bold',
                      marginBottom: 1
                    }}
                  >
                    {method.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: textColor,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      marginBottom: 2,
                      wordBreak: 'break-word'
                    }}
                  >
                    {method.value}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: secondaryTextColor,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      lineHeight: 1.5
                    }}
                  >
                    {method.description}
                  </Typography>
                </Box>
                
                {method.link && (
                  <Button
                    variant="outlined"
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      marginTop: 2,
                      color: textColor,
                      borderColor: textColor,
                      '&:hover': {
                        borderColor: iconColor,
                        backgroundColor: isDarkMode ? 'rgba(40, 151, 38, 0.1)' : 'rgba(32, 33, 36, 0.05)'
                      }
                    }}
                  >
                    {method.title === 'Email' ? 'Send Email' : 
                     method.title === 'LinkedIn' ? 'Connect' :
                     method.title === 'GitHub' ? 'View Profile' :
                     method.title === 'Phone' ? 'Call' : 'Visit'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Additional Information Section */}
        <Paper sx={{ 
          backgroundColor: cardBackground,
          padding: { xs: 2, sm: 4 },
          borderRadius: 2,
          marginTop: { xs: 3, sm: 4 }
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: textColor,
              fontSize: { xs: '1.5rem', sm: '2rem' },
              fontWeight: 'bold',
              marginBottom: 2,
              textAlign: 'center'
            }}
          >
            Let&apos;s Work Together
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: secondaryTextColor,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.6,
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            I&apos;m passionate about solving complex problems through technology and innovation. 
            Whether you&apos;re looking for a software engineer, data scientist, or DevOps specialist, 
            I&apos;m excited to discuss how we can work together to bring your ideas to life.
          </Typography>
          
          <Box sx={{ 
            textAlign: 'center', 
            marginTop: 3
          }}>
            <Button
              variant="contained"
              href="mailto:joshuaduplaa@outlook.com"
              startIcon={<EmailIcon />}
              sx={{
                backgroundColor: iconColor,
                color: isDarkMode ? '#ffffff' : '#ffffff',
                padding: '12px 24px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: isDarkMode ? '#1f7a1f' : '#000000'
                }
              }}
            >
              Start a Conversation
            </Button>
          </Box>
        </Paper>

        {/* Response Time Note */}
        <Box sx={{ 
          textAlign: 'center', 
          marginTop: { xs: 3, sm: 4 },
          padding: { xs: 2, sm: 3 }
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: secondaryTextColor,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontStyle: 'italic'
            }}
          >
            I typically respond to emails within 24 hours during weekdays.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProjectsTable from '../../components/ProjectsTable';
import NavBar from '../../components/NavBar';
import { useTheme } from '../../components/MuiThemeProvider';

export default function ProjectPage() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const secondaryTextColor = isDarkMode ? '#e0e0e0' : '#5f6368';

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
            Personal Projects
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
            I am a software engineer with a strong background in computer science, mathematics, 
            and data science, with an intense focus in DevOps, bioinformatics, AI, and web development. 
            I develop different kinds of applications, from implementing sequence alignment algorithms 
            to building Neural Network video classification models for skateboard tricks.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: secondaryTextColor,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              maxWidth: '800px',
              margin: '20px auto 0',
              lineHeight: 1.6
            }}
          >
            I have built full stack web applications, working with technologies like React, TypeScript, 
            MUI, .NET, among many other tools and libraries to create interactive and efficient applications. 
            My professional experience extends to DevOps, cloud infrastructure, and software performance 
            optimization, working with the DevOps team at ResMed.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: secondaryTextColor,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              maxWidth: '800px',
              margin: '20px auto 0',
              lineHeight: 1.6
            }}
          >
            I'm especially interested in AI-driven drug discovery, where I aim to apply machine learning, 
            data analysis, and high-performance computing to solve real-world biomedical challenges.
          </Typography>
        </Box>

        {/* Projects Section */}
        <Box sx={{ 
          marginTop: { xs: 3, sm: 4 },
          padding: { xs: 1, sm: 2 }
        }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: textColor,
              fontSize: { xs: '1.5rem', sm: '2rem' },
              fontWeight: 'bold',
              marginBottom: 3,
              textAlign: 'center'
            }}
          >
            Featured Projects
          </Typography>
          
          <ProjectsTable />
        </Box>

        {/* Footer Note */}
        <Box sx={{ 
          textAlign: 'center', 
          marginTop: { xs: 4, sm: 6 },
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
            Click on any project row to view detailed information and key features.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
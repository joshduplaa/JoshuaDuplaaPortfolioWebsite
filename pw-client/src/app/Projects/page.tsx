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
              fontSize: { xs: '0.9rem', sm: '1.1rem' },
              maxWidth: '840px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            I am a computer scientist with a strong background in software engineering, mathematics, and data science, 
            specializing in DevOps, bioinformatics, AI, and web development. My experience includes building full 
            stack applications with Python, React, TypeScript, MUI, .NET, among other technologies as well as working on DevOps and Cloud (AWS and Azure) 
            infrastructure optimization at ResMed. I have developed diverse applications ranging from CRUD apps, Microcontroller projects, 
            sequence alignment algorithms, to Neural Network video classification models. I am 
            particularly passionate about Bioinformatics and AI, where I apply machine learning skills, data analysis, 
            and high-performance computing to solve real-world biological problems.
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
'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProjectsTable, { featuredProjects, earlierProjects } from '../../components/ProjectsTable';
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
            I build software for a specific problem and a specific user, then keep it running. The featured
            projects are the ones I&apos;d point to for software engineering, platform and forward deployed
            work: a live civic data dashboard, an automated job-search pipeline I run every day, and full stack
            and data projects. Coursework and earlier projects follow.
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
          
          <ProjectsTable projects={featuredProjects} />
        </Box>

        {/* Coursework and earlier projects */}
        <Box sx={{ 
          marginTop: { xs: 4, sm: 6 },
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
            Coursework and Earlier Projects
          </Typography>
          
          <ProjectsTable projects={earlierProjects} />
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
            Expand any project row to see details and key features.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
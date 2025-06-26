import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from './MuiThemeProvider';

function createProject(
  name: string,
  description: string,
  tech: string,
  demo: string,
  github: string,
  detailedDescription: string,
  features: string[]
) {
  return { name, description, tech, demo, github, detailedDescription, features };
}

function ProjectRow(props: { project: ReturnType<typeof createProject> }) {
  const { project } = props;
  const [open, setOpen] = React.useState(false);
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const secondaryTextColor = isDarkMode ? '#e0e0e0' : '#5f6368';

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: textColor }}
          >
            {open ? <LaunchIcon /> : <LaunchIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' },
          fontWeight: 'bold'
        }}>
          {project.name}
        </TableCell>
        <TableCell sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          {project.description}
        </TableCell>
        <TableCell sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          {project.tech}
        </TableCell>
        <TableCell sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {project.github && (
              <Button
                size="small"
                startIcon={<GitHubIcon />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: textColor,
                  borderColor: textColor,
                  '&:hover': {
                    borderColor: '#289726',
                    backgroundColor: isDarkMode ? 'rgba(40, 151, 38, 0.1)' : 'rgba(40, 151, 38, 0.05)'
                  }
                }}
                variant="outlined"
              >
                Code
              </Button>
            )}
            {project.demo && (
              <Button
                size="small"
                startIcon={<LaunchIcon />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: textColor,
                  borderColor: textColor,
                  '&:hover': {
                    borderColor: '#289726',
                    backgroundColor: isDarkMode ? 'rgba(40, 151, 38, 0.1)' : 'rgba(40, 151, 38, 0.05)'
                  }
                }}
                variant="outlined"
              >
                Demo
              </Button>
            )}
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ 
                color: textColor,
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}>
                Project Details
              </Typography>
              <Typography variant="body1" sx={{ 
                color: secondaryTextColor,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                marginBottom: 2
              }}>
                {project.detailedDescription}
              </Typography>
              <Typography variant="h6" gutterBottom component="div" sx={{ 
                color: textColor,
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}>
                Key Features
              </Typography>
              <Box component="ul" sx={{ 
                color: secondaryTextColor,
                fontSize: { xs: '0.875rem', sm: '1rem' },
                paddingLeft: 2
              }}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const projects = [
  createProject(
    'Skateboard Trick Classifier',
    'Neural network model for real-time skateboard trick classification using video analysis',
    'Python, TensorFlow, OpenCV, CNN',
    'https://demo-skateboard-classifier.vercel.app',
    'https://github.com/joshduplaa/skateboard-classifier',
    'A deep learning application that uses computer vision and neural networks to classify skateboard tricks in real-time video. The model was trained on thousands of skateboarding videos and can identify over 20 different tricks with high accuracy.',
    [
      'Real-time video processing and analysis',
      'CNN architecture optimized for action recognition',
      'Web interface for easy trick classification',
      'Mobile-responsive design for on-the-go use'
    ]
  ),
  createProject(
    'Sequence Alignment Algorithm',
    'Implementation of Smith-Waterman and Needleman-Wunsch algorithms for bioinformatics',
    'Python, NumPy, Bioinformatics',
    '',
    'https://github.com/joshduplaa/sequence-alignment',
    'A comprehensive implementation of fundamental bioinformatics algorithms for DNA and protein sequence alignment. Includes both local (Smith-Waterman) and global (Needleman-Wunsch) alignment algorithms with visualization tools.',
    [
      'Local and global sequence alignment algorithms',
      'Dynamic programming optimization',
      'Interactive visualization of alignment matrices',
      'Support for DNA and protein sequences'
    ]
  ),
  createProject(
    'Portfolio Website',
    'Personal portfolio website with dark/light theme and responsive design',
    'React, TypeScript, MUI, Next.js',
    'https://joshua-duplaa-portfolio.vercel.app',
    'https://github.com/joshduplaa/portfolio-website',
    'A modern, responsive portfolio website built with React and TypeScript. Features include dark/light theme toggle, particle background effects, and mobile-responsive design.',
    [
      'Dark/light theme switching',
      'Particle background animations',
      'Mobile-responsive design',
      'Interactive project showcase'
    ]
  ),
  createProject(
    'Data Visualization Dashboard',
    'Interactive dashboard for analyzing and visualizing complex datasets',
    'React, D3.js, TypeScript, Express',
    'https://data-viz-dashboard.vercel.app',
    'https://github.com/joshduplaa/data-viz-dashboard',
    'An interactive data visualization dashboard that allows users to explore and analyze complex datasets through various chart types and filtering options.',
    [
      'Multiple chart types (bar, line, scatter, heatmap)',
      'Real-time data filtering and sorting',
      'Export functionality for reports',
      'Responsive design for all devices'
    ]
  )
];

export default function ProjectsTable() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const backgroundColor = isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)';

  return (
    <TableContainer sx={{ 
      backgroundColor, 
      borderRadius: 2,
      maxWidth: '100%',
      overflowX: 'auto'
    }}>
      <Table aria-label="projects table" sx={{ minWidth: { xs: 300, sm: 800 } }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ 
              color: textColor,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}/>
            <TableCell sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              Project Name
            </TableCell>
            <TableCell sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              Description
            </TableCell>
            <TableCell sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              Tech Stack
            </TableCell>
            <TableCell sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              Links
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 
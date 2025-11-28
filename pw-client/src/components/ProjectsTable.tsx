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
                onClick={async () => {
                  const res = await fetch("/api/launch-demo", { method: "POST" });
                  const text = await res.text();
                  alert(text);
                }}
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
    'BioInformatics Pipeline',
    'A pipeline that gathers and sorts sequences of DNA or Protein, finds representative sequences and builds clusters, filters out chimeric sequences, and performs multiple sequence alignment on non-chimeric sequences',
    'Python, Bioinformatics, Sequence Analysis',
    'endpoint', /*deployment backend endpoint*/
    'https://github.com/joshduplaa/Bioinformatics-Pipeline', /*github link*/
    'A comprehensive bioinformatics pipeline for DNA and protein chimera detection and sequence analysis. The pipeline processes raw sequence data through multiple stages including clustering, chimeric sequence detection, and multiple sequence alignment. Utility functions from my previous Needleman Wunsch, Smith Waterman, and MSA implementations',
    [
      'DNA and protein sequence processing',
      'Representative sequence clustering',
      'Chimeric sequence filtering',
      'Multiple sequence alignment (MSA)'
    ]
  ),
  createProject(
    'Pairwise Sequence Alignment Tool',
    'WebApp using Needleman Wunsch and Smithwaterman code for global alignment. Python code is containerized and executed when sequences are given by the user',
    'Python, React, Docker, Bioinformatics',
    '',
    'https://github.com/joshduplaa/PairwiseAlignmentApp',
    'A web application that implements both Needleman-Wunsch (global) and Smith-Waterman (local) sequence alignment algorithms. Users can input sequences via text or upload FASTA files for analysis.',
    [
      'Global and local sequence alignment',
      'FASTA file upload support',
      'Containerized Python backend',
      'Interactive web interface'
    ]
  ),
  createProject(
    'Multiple Sequence Alignment Tool',
    'WebApp for Multiple Sequence Alignment using FitchMargoliash, Feng Doolittle, and Sum of Pairs algorithms',
    'Python, React, Bioinformatics, MSA',
    '',
    'https://github.com/joshduplaa/MultipleSequenceAlignmentTool',
    'A comprehensive multiple sequence alignment tool implementing multiple algorithms including Fitch-Margoliash, Feng-Doolittle, and Sum of Pairs methods for phylogenetic analysis.',
    [
      'Multiple alignment algorithms',
      'Phylogenetic tree construction',
      'Interactive web interface',
      'Sequence visualization'
    ]
  ),
  createProject(
    'The Red Raider Skater (Video Classification Model)',
    'Neural network model for skateboard trick classification using video analysis',
    'Python, TensorFlow, OpenCV, CNN',
    '',
    'https://github.com/joshduplaa/RedRaiderSkater',
    'A deep learning model designed to classify skateboard tricks from video footage. The model uses convolutional neural networks to analyze video frames and identify specific skateboarding maneuvers.',
    [
      'Real-time video processing',
      'CNN architecture for action recognition',
      'Skateboard trick classification',
      'Jupyter notebook interface'
    ]
  ),
  createProject(
    'Image Classification Neural Network',
    'Neural network model for image classification tasks',
    'Python, TensorFlow, CNN, Image Processing',
    '',
    '',
    'A convolutional neural network model designed for image classification tasks. The model can be trained on custom datasets and used for various computer vision applications.',
    [
      'Custom CNN architecture',
      'Image preprocessing pipeline',
      'Transfer learning capabilities',
      'Model training and evaluation'
    ]
  ),
  createProject(
    'Fluid Boundary Approximator (Least Squares Project)',
    'Least squares line approximation of a set of points using MatLab and Numerical Analysis techniques',
    'MATLAB, Numerical Analysis, Least Squares',
    '',
    'https://github.com/joshduplaa/fluid-boundaryApp',
    'A MATLAB implementation of least squares approximation for fluid boundary analysis. The project demonstrates numerical analysis techniques for approximating complex boundaries from discrete data points.',
    [
      'Least squares approximation',
      'Numerical analysis methods',
      'MATLAB implementation',
      'Fluid dynamics applications'
    ]
  ),
  createProject(
    'MultiProcessed Conway\'s Game of Life',
    'MultiProcessed Conway\'s game of life with "wrap around" condition written in Python using GIL',
    'Python, Multiprocessing, GIL, Cellular Automata',
    '',
    'https://github.com/joshduplaa/FinalConcepts',
    'An optimized implementation of Conway\'s Game of Life using Python multiprocessing. Features wrap-around boundary conditions and efficient parallel computation using the Global Interpreter Lock (GIL).',
    [
      'Multiprocessing implementation',
      'Wrap-around boundary conditions',
      'GIL optimization',
      'Cellular automata simulation'
    ]
  ),
  createProject(
    'MIS Website',
    'Full stack Application built with React/TypeScript frontend and .NET/C# backend for the Molecular Information Simulations laboratory at TTU HSC',
    'React, TypeScript, .NET, C#, Full Stack',
    'https://scrumdumpstersmis.web.app/',
    'https://github.com/joshduplaa/medical_information_simulation',
    'A comprehensive full-stack web application developed for the Molecular Information Simulations laboratory at Texas Tech University Health Sciences Center. Built collaboratively with a team using modern web technologies.',
    [
      'React/TypeScript frontend',
      '.NET/C# backend',
      'Team collaboration',
      'Laboratory management system'
    ]
  ),
  createProject(
    'National Representation Platform',
    'Unique Social Media platform centered on public evaluation of user-posted ideas for changes in local and federal government',
    'React, Social Media, Government, Civic Tech',
    '',
    'https://github.com/joshduplaa/National-Representation',
    'An innovative social media platform designed to facilitate civic engagement by allowing users to post and evaluate ideas for government policy changes at both local and federal levels.',
    [
      'Civic engagement platform',
      'Idea evaluation system',
      'Government policy focus',
      'Social media features'
    ]
  ),
  createProject(
    'ATmega Asteroids Game',
    'Flappy bird style game on ATmega328P using LCD display, buttons, and EEPROM with increasing difficulty and high score saving',
    'C, ATmega328P, Embedded Systems, LCD',
    '',
    'https://github.com/joshduplaa/AVR-Microcontroller-Asteroids-Game',
    'An embedded systems project implementing a Flappy Bird-style game on the ATmega328P microcontroller. Features include LCD display, button controls, EEPROM for high score storage, and progressive difficulty.',
    [
      'ATmega328P microcontroller',
      'LCD display interface',
      'EEPROM data storage',
      'Progressive difficulty system'
    ]
  ),
  createProject(
    'Lottery Project',
    'A Lottery webapp built for SWE (Software Engineering) course',
    'React, Web Development, SWE',
    'https://swelotteryproject.web.app/',
    'https://github.com/joshduplaa/SWE_Lottery_Project?tab=GPL-3.0-1-ov-file',
    'A web application developed for a Software Engineering course project. The lottery system demonstrates web development principles and user interface design.',
    [
      'Web application development',
      'User interface design',
      'Software engineering principles',
      'Interactive lottery system'
    ]
  ),
  createProject(
    'Portfolio Website',
    'Personal portfolio website showcasing projects and skills with modern design and responsive layout',
    'React, TypeScript, MUI, Next.js',
    '',
    'https://github.com/joshduplaa/JoshuaDuplaaPortfolioWebsite',
    'A modern, responsive portfolio website built with React, TypeScript, and Material-UI. Features include dark/light theme toggle, particle background effects, and mobile-responsive design.',
    [
      'Dark/light theme switching',
      'Particle background animations',
      'Mobile-responsive design',
      'Interactive project showcase'
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
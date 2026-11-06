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
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from './MuiThemeProvider';

function createProject(
  name: string,
  description: string,
  tech: string,
  demo: string,
  github: string,
  detailedDescription: string,
  features: string[],
  caseStudy?: string
) {
  return { name, description, tech, demo, github, detailedDescription, features, caseStudy };
}

function ProjectRow(props: { project: Project }) {
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
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
            {project.caseStudy && (
              <Button
                size="small"
                startIcon={<ArticleIcon />}
                href={project.caseStudy}
                sx={{
                  color: textColor,
                  borderColor: '#289726',
                  '&:hover': {
                    borderColor: '#289726',
                    backgroundColor: isDarkMode ? 'rgba(40, 151, 38, 0.1)' : 'rgba(40, 151, 38, 0.05)'
                  }
                }}
                variant="outlined"
              >
                Case study
              </Button>
            )}
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
            {project.demo.startsWith('http') && (
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

type Project = ReturnType<typeof createProject>;

// Shown first on the Projects page: the strongest work for software engineering and forward deployed roles.
export const featuredProjects: Project[] = [
  createProject(
    'LLM Coding Eval Harness (in progress)',
    'A harness that runs model-generated code against test suites inside a locked-down Docker sandbox and records reproducible, categorized results',
    'Python, Docker, gVisor, pytest, uv',
    '',
    'https://github.com/joshduplaa/LLM-coding-eval-harness/tree/feature/m1-core-harness',
    'Each sample runs in a fresh container with no network, a read-only filesystem, a non-root user, no capabilities, and limits on CPU, memory and processes. gVisor is available as an optional stronger sandbox. A trusted wrapper runs the tests and returns one result that carries a per-run code, so the code under test can\'t fake a pass. Every run is saved with what\'s needed to reproduce it. Milestone 1 of 6 is done. Only a mock model exists so far, so no real model has been measured. Later milestones add a results service, CI, Kubernetes with Grafana monitoring, and Terraform. Built as an exercise in agentic development with Claude Code.',
    [
      'Eight result categories (pass, wrong answer, runtime error, syntax error, timeout, resource limit, sandbox violation, harness error), and harness errors never count against the model',
      'Every task checks before each run that its reference solution passes and a deliberately wrong one fails',
      '71 tests, including attacks on the sandbox: escape attempts, infinite loops, memory and process bombs, output floods and tampering with the harness',
      'Optional gVisor runtime; each result records which runtime ran it'
    ]
  ),
  createProject(
    'Seattle Neighborhood Pulse',
    'Interactive civic dashboard exploring what Seattle residents report to the City: where requests concentrate, which neighborhoods report the most, and how volume changes over time',
    'Next.js, TypeScript, MapLibre, Recharts, Vitest',
    'https://seattle-neighborhood-pulse.vercel.app',
    'https://github.com/joshduplaa/seattle-neighborhood-pulse',
    'A dashboard built on the City of Seattle\'s Customer Service Requests open dataset (about 2.5 million requests, refreshed daily). Every number is queried live from the Socrata API, with server-side aggregation and caching, and every filter lives in the URL so any view can be shared. Built as an exercise in agentic development with Claude Code.',
    [
      'Map with neighborhood shading, a density heatmap and clustered request markers',
      'Filters by date, request type, status, neighborhood and council district',
      'Per-capita neighborhood comparisons and period-over-period change',
      'Trend charts and response times for the request types the City tracks'
    ],
    '/Projects/SeattleNeighborhoodPulse'
  ),
  createProject(
    'Daily Job Watcher',
    'Automated job-search pipeline that checks 70 company job boards and careers sites every two hours, scores each posting against my background, and sends new matches to my phone, my inbox and a Google Sheet',
    'Python, asyncio, httpx, GitHub Actions, Google Sheets API, pytest',
    '',
    '', /* private repository */
    'A scheduled service on GitHub Actions with no server to run. Adapters read Greenhouse, Ashby, Lever, Workday, Workable and amazon.jobs, plus the Microsoft, Google and Apple careers sites, and turn every posting into a common record. A configurable filter rejects out-of-scope titles and locations, parses pay and required years of experience, and scores what remains. New matches go out as a push notification and an email digest and are logged to a Google Sheet for tracking applications. When a dry run showed that most sources hired outside Seattle, I added Seattle-area and remote-friendly employers, which raised current matches from 210 to 380. The repository is private; I\'m happy to walk through it.',
    [
      '70 sources across six job-board APIs and three careers sites, with retries, rate limiting and robots.txt limits',
      'Rules for titles, locations, pay and experience kept in YAML, so tuning needs no code changes',
      'Health alerts when a source breaks, sent once per breakage instead of on every run',
      '294 tests run against recorded API responses, with no live network calls'
    ],
    '/Projects/DailyJobWatcher'
  ),
  createProject(
    'Medical Information Simulation (MIS)',
    'Team capstone web app for teaching laboratory quality control at TTU Health Sciences Center: faculty set QC targets, students enter results and read Levey-Jennings charts with Westgard checks, and faculty grade each run',
    'React, TypeScript, ASP.NET Core 8, EF Core, SQL Server, Playwright',
    'https://scrumdumpstersmis.web.app/',
    'https://github.com/joshduplaa/medical_information_simulation',
    'Started as a team capstone in 2024; I rebuilt the client and later finished the core workflow end to end with Claude Code. Server-side auth with roles, a submit / grade / return workflow, Levey-Jennings charts with Westgard rules, and tests at three levels in CI. The live demo runs entirely in the browser on synthetic data. Educational simulation only, not for clinical use.',
    [
      'Full QC loop: lots and targets, results entry, submission, grading and a gradebook',
      'Levey-Jennings charts with 1-2s, 1-3s, 2-2s, R-4s, 4-1s and 10x Westgard rules',
      'Deny-by-default role-based auth with JWT, lockout and rate limiting',
      '83 automated tests (API, client, Playwright incl. an accessibility scan) in GitHub Actions'
    ],
    '/Projects/MedicalInformationSimulation'
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
    'BioInformatics Pipeline',
    'A pipeline that gathers and sorts sequences of DNA or Protein, finds representative sequences and builds clusters, filters out chimeric sequences, and performs multiple sequence alignment on non-chimeric sequences',
    'Python, Bioinformatics, Sequence Analysis',
    '',
    'https://github.com/joshduplaa/Bioinformatics-Pipeline',
    'A comprehensive bioinformatics pipeline for DNA and protein chimera detection and sequence analysis. The pipeline processes raw sequence data through multiple stages including clustering, chimeric sequence detection, and multiple sequence alignment. Utility functions from my previous Needleman Wunsch, Smith Waterman, and MSA implementations',
    [
      'DNA and protein sequence processing',
      'Representative sequence clustering',
      'Chimeric sequence filtering',
      'Multiple sequence alignment (MSA)'
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
  )
];

// Coursework and earlier projects, shown below the featured ones.
export const earlierProjects: Project[] = [
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
    'Fluid Boundary Approximator (Least Squares Project)',
    'Least squares line approximation of a set of points using MatLab and Numerical Analysis techniques',
    'MATLAB, JavaScript, Numerical Analysis, Least Squares',
    'https://joshduplaa.github.io/fluid-boundaryApp/',
    'https://github.com/joshduplaa/fluid-boundaryApp',
    'A MATLAB implementation of least squares approximation for fluid boundary analysis, with an interactive web demo. The project demonstrates numerical analysis techniques for approximating complex boundaries from discrete data points.',
    [
      'Least squares approximation',
      'Numerical analysis methods',
      'MATLAB implementation',
      'Interactive web demo with a JavaScript port of the fits'
    ]
  ),
  createProject(
    'MultiProcessed Conway\'s Game of Life',
    'Conway\'s Game of Life with wrap-around edges, parallelized with Python multiprocessing',
    'Python, Multiprocessing, Cellular Automata',
    '',
    '', /* FinalConcepts repo is private */
    'An implementation of Conway\'s Game of Life with wrap-around boundary conditions. The grid is split across worker processes with Python\'s multiprocessing module, which sidesteps the Global Interpreter Lock (GIL) so the simulation runs on multiple cores.',
    [
      'Grid split across worker processes',
      'Wrap-around boundary conditions',
      'Runs on multiple cores despite the GIL',
      'Cellular automata simulation'
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
    'https://github.com/joshduplaa/SWE_Lottery_Project',
    'A web application developed for a Software Engineering course project. The lottery system demonstrates web development principles and user interface design.',
    [
      'Web application development',
      'User interface design',
      'Software engineering principles',
      'Interactive lottery system'
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

export default function ProjectsTable(props: { projects: Project[] }) {
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
          {props.projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 
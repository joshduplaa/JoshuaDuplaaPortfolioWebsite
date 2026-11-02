'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import NavBar from './NavBar';
import { useTheme } from './MuiThemeProvider';

export type CaseStudyContent = {
  title: string;
  summary: string;
  stack: string;
  github?: string;
  demo?: string;
  problem: string[];
  constraints: string[];
  builtIntro: string;
  diagram: string[];   // the main stages, left to right
  built: string[];
  decisions: string[];
  results: string[];
  next: string[];
};

function Section(props: { title: string; items?: string[]; children?: React.ReactNode }) {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const secondaryTextColor = isDarkMode ? '#e0e0e0' : '#5f6368';
  const cardBackground = isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)';

  return (
    <Paper sx={{ backgroundColor: cardBackground, padding: { xs: 2, sm: 3 }, borderRadius: 2, marginBottom: 3, textAlign: 'left' }}>
      <Typography variant="h5" component="h2" sx={{
        color: textColor,
        fontSize: { xs: '1.25rem', sm: '1.5rem' },
        fontWeight: 'bold',
        marginBottom: 1.5
      }}>
        {props.title}
      </Typography>
      {props.children}
      {props.items && (
        <Box component="ul" sx={{
          color: secondaryTextColor,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          lineHeight: 1.6,
          paddingLeft: 3,
          margin: 0,
          '& li': { marginBottom: 1 }
        }}>
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </Box>
      )}
    </Paper>
  );
}

function Diagram(props: { stages: string[] }) {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const borderColor = isDarkMode ? '#289726' : '#202124';

  return (
    <Box
      role="img"
      aria-label={`Architecture: ${props.stages.join(', then ')}`}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch',
        gap: 1,
        marginY: 2
      }}
    >
      {props.stages.map((stage, index) => (
        <React.Fragment key={stage}>
          {index > 0 && (
            <Box aria-hidden sx={{ color: textColor, alignSelf: 'center', fontSize: '1.25rem' }}>
              <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>&rarr;</Box>
              <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>&darr;</Box>
            </Box>
          )}
          <Box sx={{
            flex: 1,
            border: `1px solid ${borderColor}`,
            borderRadius: 1,
            padding: 1.5,
            color: textColor,
            fontSize: { xs: '0.875rem', sm: '0.95rem' },
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {stage}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default function CaseStudy(props: { content: CaseStudyContent }) {
  const c = props.content;
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const secondaryTextColor = isDarkMode ? '#e0e0e0' : '#5f6368';
  const buttonSx = {
    color: textColor,
    borderColor: textColor,
    '&:hover': {
      borderColor: '#289726',
      backgroundColor: isDarkMode ? 'rgba(40, 151, 38, 0.1)' : 'rgba(40, 151, 38, 0.05)'
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ paddingTop: { xs: 2, sm: 4 }, paddingBottom: { xs: 4, sm: 6 } }}>
        <Button href="/Projects" startIcon={<ArrowBackIcon />} sx={{ ...buttonSx, marginBottom: 2 }}>
          All projects
        </Button>

        <Box sx={{ marginBottom: { xs: 3, sm: 4 } }}>
          <Typography variant="overline" sx={{ color: secondaryTextColor }}>Case study</Typography>
          <Typography variant="h2" component="h1" sx={{
            color: textColor,
            fontSize: { xs: '2rem', sm: '2.75rem' },
            fontWeight: 'bold',
            marginBottom: 1.5
          }}>
            {c.title}
          </Typography>
          <Typography sx={{ color: secondaryTextColor, fontSize: { xs: '1rem', sm: '1.15rem' }, lineHeight: 1.6 }}>
            {c.summary}
          </Typography>
          <Typography sx={{ color: secondaryTextColor, fontSize: '0.9rem', marginTop: 1.5 }}>
            {c.stack}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginTop: 2 }}>
            {c.github && (
              <Button variant="outlined" size="small" startIcon={<GitHubIcon />} href={c.github}
                target="_blank" rel="noopener noreferrer" sx={buttonSx}>
                Code
              </Button>
            )}
            {c.demo && (
              <Button variant="outlined" size="small" startIcon={<LaunchIcon />} href={c.demo}
                target="_blank" rel="noopener noreferrer" sx={buttonSx}>
                Live demo
              </Button>
            )}
          </Box>
        </Box>

        <Section title="The problem" items={c.problem} />
        <Section title="Constraints" items={c.constraints} />
        <Section title="What I built" items={c.built}>
          <Typography sx={{ color: secondaryTextColor, fontSize: { xs: '0.9rem', sm: '1rem' }, lineHeight: 1.6 }}>
            {c.builtIntro}
          </Typography>
          <Diagram stages={c.diagram} />
        </Section>
        <Section title="Decisions and trade-offs" items={c.decisions} />
        <Section title="Results" items={c.results} />
        <Section title="What I'd do next" items={c.next} />
      </Container>
    </>
  );
}

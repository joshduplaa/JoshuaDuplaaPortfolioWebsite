import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from './MuiThemeProvider';

type Role = {
  title: string;
  company: string;
  start: string;
  end: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Mercor',
    start: 'Feb 2026',
    end: 'Jul 2026',
    highlights: [
      'Contract role orchestrating agentic coding workflows with Claude Code to reproduce, diagnose, and fix issues across unfamiliar repositories, reviewing agent-generated patches for correctness, regressions, and test coverage before submission.',
      'Developed 135+ Python coding problems, reference solutions, and test suites across 25 repositories to train AI coding models, earning a 99%+ quality rating; these were written without AI assistance using official documentation.',
      'Evaluated AI-generated code and documented actionable feedback on correctness, architecture, edge cases, and regressions, and annotated code and images for reinforcement learning pipelines using detailed rubrics.'
    ]
  },
  {
    title: 'DevOps Engineer Intern II',
    company: 'ResMed',
    start: 'May 2024',
    end: 'Aug 2024',
    highlights: [
      'Restored 25+ Windows servers during the global CrowdStrike SEV-1 outage and helped automate recovery for the remaining fleet, reducing downtime.',
      'Monitored production multi-cloud infrastructure across AWS and Azure, using Azure Monitor and Kusto (KQL) to diagnose incidents and improve service reliability.',
      'Built a self-service Kubernetes training platform on AKS with a supporting API, Azure DevOps pipelines, RBAC, and documentation, streamlining onboarding and cluster deployments for a 12-person team.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Texas Tech IMSE',
    start: 'Oct 2023',
    end: 'Jan 2025',
    highlights: [
      'Built and maintained 15+ Power BI dashboards for the IMSE department and the College of Engineering, triaging report requests from non-technical staff and sending regular status updates.',
      'Designed and standardized data pipelines in Python, Pandas, SQL, and DAX, turning ad hoc reporting into repeatable, validated workflows.'
    ]
  },
  {
    title: 'DevOps Engineer Intern',
    company: 'ResMed',
    start: 'Jun 2023',
    end: 'Sep 2023',
    highlights: [
      'Automated HIPAA-compliant Skilled Nursing Facility (SNF) server deployments and patching with Ansible and Terraform, making deployments consistent and repeatable as infrastructure as code.',
      'Built YAML CI/CD pipelines in Azure DevOps to test, version, and deploy Terraform infrastructure as code.',
      'Placed 2nd in a company-sponsored cybersecurity Hackathon (CyberRange).'
    ]
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'Texas Tech Applied Vision Laboratory',
    start: 'Aug 2022',
    end: 'Jan 2023',
    highlights: [
      'Built Python data pipelines to collect, segment, and preprocess 100+ hours of video for evaluating real-time computer vision models.',
      'Contributed to the development and evaluation of Mask R-CNN models in PyTorch, analyzing model performance on real-world video data.'
    ]
  },
  {
    title: 'Calculus II Tutor',
    company: 'Texas Tech TLPDC',
    start: 'Aug 2022',
    end: 'Jan 2023',
    highlights: [
      'Tutored students in Calculus II, helping them understand complex mathematical concepts and improve academic performance.'
    ]
  }
];

export default function Experience() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const secondaryTextColor = isDarkMode ? '#e0e0e0' : '#5f6368';
  const backgroundColor = isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'left' }}>
      {roles.map((role) => (
        <Paper key={`${role.title}-${role.start}`} sx={{ backgroundColor, borderRadius: 2, padding: { xs: 2, sm: 3 } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'baseline' },
            gap: { xs: 0.5, sm: 2 }
          }}>
            <Box>
              <Typography component="h2" sx={{ color: textColor, fontWeight: 'bold', fontSize: { xs: '1.05rem', sm: '1.2rem' } }}>
                {role.title}
              </Typography>
              <Typography sx={{ color: textColor, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                {role.company}
              </Typography>
            </Box>
            <Typography sx={{ color: secondaryTextColor, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              {role.start} &ndash; {role.end}
            </Typography>
          </Box>
          <Box component="ul" sx={{
            color: secondaryTextColor,
            fontSize: { xs: '0.9rem', sm: '0.95rem' },
            lineHeight: 1.6,
            paddingLeft: 3,
            marginTop: 1.5,
            marginBottom: 0,
            '& li': { marginBottom: 0.75 }
          }}>
            {role.highlights.map((item, index) => <li key={index}>{item}</li>)}
          </Box>
        </Paper>
      ))}
    </Box>
  );
}

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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from './MuiThemeProvider';

function createData(
  Title: string,
  Company: string,
  Start: string,
  End: string,
  description: string // Add description parameter

) {
  return { Title, Company, Start, End, description };
}

// Put month and year on separate lines on mobile so every date stacks the same way,
// whether or not it is long enough to wrap on its own.
function StackedDate(props: { date: string }) {
  const [month, year] = props.date.split(' ');
  return (
    <>
      {month}
      <Box component="br" sx={{ display: { xs: 'inline', sm: 'none' } }} />
      {' '}{year}
    </>
  );
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
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
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          {row.Title}
        </TableCell>
        <TableCell align="left" sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          {row.Company}
        </TableCell>
        <TableCell align="right" sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          <StackedDate date={row.Start} />
        </TableCell>
        <TableCell align="right" sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          <StackedDate date={row.End} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ 
                color: textColor,
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}>
                Description
              </Typography>
              <Typography variant="body1" sx={{ 
                color: secondaryTextColor,
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}>
                {row.description} {/* Display description here */}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData(
    'Software Engineer',
    'Mercor',
    'February 2026',
    'July 2026',
    'Contract role orchestrating agentic coding workflows with Claude Code to reproduce, diagnose, and fix issues across unfamiliar repositories, reviewing agent-generated patches for correctness, regressions, and test coverage before submission. Developed 135+ Python coding problems, reference solutions, and test suites across 25 repositories to train AI coding models, earning a 99%+ quality rating; these were written without AI assistance using official documentation. Evaluated AI-generated code and documented actionable feedback on correctness, architecture, edge cases, and regressions, and annotated code and images for reinforcement learning pipelines using detailed rubrics.'
  ),
  createData(
    'DevOps Engineer Intern II',
    'ResMed',
    'May 2024',
    'August 2024',
    'Restored 25+ Windows servers during the global CrowdStrike SEV-1 outage and helped automate recovery for the remaining fleet, reducing downtime. Monitored production multi-cloud infrastructure across AWS and Azure, using Azure Monitor and Kusto (KQL) to diagnose incidents and improve service reliability. Built a self-service Kubernetes training platform on AKS with a supporting API, Azure DevOps pipelines, RBAC, and documentation, streamlining onboarding and cluster deployments for a 12-person team.'
  ),
  createData(
    'Data Analyst',
    'Texas Tech IMSE',
    'October 2023',
    'January 2025',
    'Built and maintained 15+ Power BI dashboards for the IMSE department and the College of Engineering, triaging report requests from non-technical staff and sending regular status updates. Designed and standardized data pipelines in Python, Pandas, SQL, and DAX, turning ad hoc reporting into repeatable, validated workflows.'
  ),
  createData(
    'DevOps Engineer Intern',
    'ResMed',
    'June 2023',
    'September 2023',
    'Automated HIPAA-compliant Skilled Nursing Facility (SNF) server deployments and patching with Ansible and Terraform, making deployments consistent and repeatable as infrastructure as code. Built YAML CI/CD pipelines in Azure DevOps to test, version, and deploy Terraform infrastructure as code. Placed 2nd in a company-sponsored cybersecurity Hackathon (CyberRange).'
  ),
  createData(
    'Undergraduate Research Assistant',
    'Texas Tech Applied Vision Laboratory',
    'August 2022',
    'January 2023',
    'Built Python data pipelines to collect, segment, and preprocess 100+ hours of video for evaluating real-time computer vision models. Contributed to the development and evaluation of Mask R-CNN models in PyTorch, analyzing model performance on real-world video data.'
  ),
  createData(
    'Calculus II Tutor',
    'Texas Tech TLPDC',
    'August 2022',
    'January 2023',
    'Tutored students in Calculus II, helping them understand complex mathematical concepts and improve academic performance.'
  )
];
export default function CollapsibleTable() {
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
      <Table aria-label="collapsible table" sx={{ minWidth: { xs: 300, sm: 650 } }}>
        <TableHead>
          <TableRow >
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
              Title
            </TableCell>
            <TableCell sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              Company
            </TableCell>
            <TableCell align="right" sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              Start
            </TableCell>
            <TableCell align="right" sx={{ 
              color: textColor, 
              fontWeight: 'bold',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '8px 4px', sm: '16px' }
            }}>
              End
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
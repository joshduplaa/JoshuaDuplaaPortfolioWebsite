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
          {row.Start}
        </TableCell>
        <TableCell align="right" sx={{ 
          color: textColor,
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: '8px 4px', sm: '16px' }
        }}>
          {row.End}
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
    'Data Analyst',
    'Texas Tech IMSE',
    'October 2023',
    'January 2025',
    'Student Assistant position where I developed and maintained 15+ interactive PowerBI dashboards for the IMSE department and the TTU COE. Built out data models and ETL pipelines to visualize and transform data from MS SQL databases and Excel using Python, DAX, and PowerBI. Aided in data comprehension and communication, standardizing data procedures and creating data models relating to the office environment and department expenses/revenue.'
  ),
  createData(
    'DevOps Engineer Intern II',
    'ResMed',
    'May 2024',
    'August 2024',
    'Built a distributed Kubernetes training environment for co-workers using Azure DevOps Pipelines and AKS (Azure Kubernetes Service). Monitored and maintained cloud infrastructure on both AWS and Azure. On the frontlines during the CrowdStrike outage which caused widespread Windows Machine failures; manually recovered over 25 servers and helped develop an automated solution to recover the rest of the network. Continued working with containerization technologies, CI/CD pipelines, and cloud monitoring.'
  ),
  createData(
    'DevOps Engineer Intern',
    'ResMed',
    'June 2023',
    'September 2023',
    'Automated infrastructure configuration and deployment for skilled nursing facilities (SNF) servers using Ansible playbooks, Terraform, Python, Linux, virtualization, Bash, Batch, and Powershell scripting. Introduced to building CI/CD pipelines for Azure and AWS infrastructure using Terraform. Developed understanding of TCP/IP networking, IP routing, and core technologies such as Load Balancers, Firewalls, ACLs, DNS, and associated Cloud resources. Placed 2nd in a company-sponsored cybersecurity Hackathon (CyberRange).' 
  ),
  createData(
    'Undergraduate Research Assistant',
    'Texas Tech ECE',
    'August 2022',
    'January 2023',
    'Undergraduate research assistant for the Applied Vision Laboratory (AVL) at Texas Tech. Responsible for collecting and segmenting 100+ hours of footage as test data and comparing it against the results from the lab\'s image processing machine learning model.'
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
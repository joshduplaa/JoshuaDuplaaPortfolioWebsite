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
import Paper from '@mui/material/Paper';
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
        <TableCell component="th" scope="row" sx={{ color: textColor }}>
          {row.Title}
        </TableCell>
        <TableCell align="left" sx={{ color: textColor }}>{row.Company}</TableCell>
        <TableCell align="right" sx={{ color: textColor }}>{row.Start}</TableCell>
        <TableCell align="right" sx={{ color: textColor }}>{row.End}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{ color: textColor }}>
                Description
              </Typography>
              <Typography variant="body1" sx={{ color: secondaryTextColor }}>
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
  createData('Data Analyst', 'TTU IMSE', 'October 2023', 'January 2025', 'Analyzed and visualized data to support industrial engineering research.'),
  createData('DevOps Engineer Intern II', 'ResMed', 'May 2024', 'August 2024', 'Worked on CI/CD pipelines and cloud infrastructure improvements.'),
  createData('DevOps Engineer Intern', 'ResMed', 'June 2023', 'September 2023', 'Automated deployment processes and enhanced system monitoring.'),
  createData('Learning Assistant', 'TTU TLPDC', 'August 2022', 'January 2023', 'Assisted students with coursework and facilitated active learning sessions.'),
  createData('UG Research Assistant', 'TTU AVL', 'August 2022', 'January 2023','Assisted in data collection for researchers working on an image recognition network to count cotton in real time.' )
];
export default function CollapsibleTable() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const backgroundColor = isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)';

  return (
    <TableContainer sx={{ backgroundColor, borderRadius: 2 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow >
            <TableCell sx={{ color: textColor }}/>
            <TableCell sx={{ color: textColor, fontWeight: 'bold' }}>Title</TableCell>
            <TableCell sx={{ color: textColor, fontWeight: 'bold' }}>Company</TableCell>
            <TableCell align="right" sx={{ color: textColor, fontWeight: 'bold' }}>Start</TableCell>
            <TableCell align="right" sx={{ color: textColor, fontWeight: 'bold' }}>End</TableCell>
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
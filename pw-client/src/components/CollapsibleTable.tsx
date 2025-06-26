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
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>
          {row.Title}
        </TableCell>
        <TableCell align="left" sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>{row.Company}</TableCell>
        <TableCell align="right" sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>{row.Start}</TableCell>
        <TableCell align="right" sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>{row.End}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{ color: 'white', fontSize: '1.2rem' }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
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
  const theme = useTheme();
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'transparent' }}>
            <TableCell sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }} />
            <TableCell sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>Title</TableCell>
            <TableCell sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>Company</TableCell>
            <TableCell align="right" sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>Start</TableCell>
            <TableCell align="right" sx={{ color: theme.palette.text.primary, fontSize: '1.2rem' }}>End</TableCell>
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
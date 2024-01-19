import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import DrawerToggle from './DrawerToggle.jsx';
import './componentStyles/navbar.css';

const logoTheme = createTheme({
  typography: {
    fontFamily: [
      'Lemon',
      'serif',
    ].join(','),
    
  },});


export default function ButtonAppBar() {

  
  return (
    
    
      <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%' }}  >
        <Toolbar>
        <ThemeProvider theme={logoTheme}>
          <Typography variant="h2" component="div" sx={{ }}>
            JD    
          </Typography>
        </ThemeProvider>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>

          <div className='navTabs'>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Contact</Button>
          </div>
          <div id='toggle'>
            <DrawerToggle></DrawerToggle>
          </div>
        </Toolbar>
      </AppBar>

  );
}
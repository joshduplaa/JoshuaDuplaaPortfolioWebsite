import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link
import './componentStyles/navbar.css';

export default function NavBar() {
  return (
    <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

        <div className='navTabs'>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Contact</Button>
          </Link>
        </div>
        
      </Toolbar>
    </AppBar>
  );
}

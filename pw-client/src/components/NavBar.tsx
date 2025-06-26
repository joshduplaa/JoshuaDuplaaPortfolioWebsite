"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


export default function NavBar() {
  return (
    <AppBar 
      className='Appbar' 
      position="relative" 
      color="default" 
      elevation={0}
      sx={{ 
        backgroundColor: "transparent !important", 
        boxShadow: 'none !important', 
        width: '100%',
        position: 'relative',
        zIndex: 3,
        backgroundImage: 'none !important'
      }}
    >    
      <Toolbar sx={{ backgroundColor: 'transparent !important' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }} />

        <div className='navTabs'>
            <Link href="/" >
              <Button color="inherit" sx={{ color: '#ffffff' }}>Home</Button>
            </Link>
            <Link href="/Projects">
              <Button color="inherit" sx={{ color: '#ffffff' }}>Projects</Button>
            </Link>
            <Link href="/Contact">
              <Button color="inherit" sx={{ color: '#ffffff' }}>Contact</Button>
            </Link>
       
        </div>
        
      </Toolbar>
      </AppBar>
    
  );
}

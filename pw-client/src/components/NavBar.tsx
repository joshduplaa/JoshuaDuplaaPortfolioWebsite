"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './componentStyles/navbar.css';
import Link from 'next/link';


export default function NavBar() {
  return (
    <>
    <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

        <div className='navTabs'>
            <Link href="/" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/Projects" passHref>
              <Button color="inherit">Projects</Button>
            </Link>
            <Link href="/Contact" passHref>
              <Button color="inherit">Contact</Button>
            </Link>
       
        </div>
        
      </Toolbar>
    </AppBar>
    </>
  );
}

"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


export default function NavBar() {
  return (
    
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

        <div className='navTabs'>
            <Link href="/" >
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/Projects">
              <Button color="inherit">Projects</Button>
            </Link>
            <Link href="/Contact">
              <Button color="inherit">Contact</Button>
            </Link>
       
        </div>
        
      </Toolbar>
    
  );
}

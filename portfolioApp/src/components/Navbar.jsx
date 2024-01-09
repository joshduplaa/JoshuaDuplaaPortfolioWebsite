import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import './componentStyles/navBar.css'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>  
      <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%'}}>


        <Toolbar>
        {/*Left Section*/}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>

        {/*Middle Section*/}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <div className='NameLogo'>
                        Joshua Duplaa
                    </div>
                </Typography>
              
        {/*Right Section*/}
            <GitHubIcon></GitHubIcon>
            <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
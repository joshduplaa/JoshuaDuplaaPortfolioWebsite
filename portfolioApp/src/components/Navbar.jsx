import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './componentStyles/navBar.css'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>  
      <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%'}}>


        <Toolbar>
        {/*Left Section*/}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            </Box>

        {/*Middle Section*/}
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-center' }}>            
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <div className='NameLogo'>
                        Joshua Duplaa
                    </div>
                </Typography>
            </Box>  

        {/*Right Section*/}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button color="inherit">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
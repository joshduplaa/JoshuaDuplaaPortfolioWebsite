"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import { useTheme } from './MuiThemeProvider';

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();

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
        {/* Theme Toggle Switch */}
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#289726',
                  '&:hover': {
                    backgroundColor: 'rgba(40, 151, 38, 0.08)',
                  },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#289726',
                },
              }}
            />
          }
          label={isDarkMode ? "Dark" : "Light"}
          sx={{
            color: isDarkMode ? '#ffffff' : '#202124',
            '& .MuiFormControlLabel-label': {
              fontSize: '0.875rem',
              fontWeight: 500,
            },
          }}
        />

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
      </AppBar>
    
  );
}

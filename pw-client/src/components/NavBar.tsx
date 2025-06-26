"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ThemeModeContext } from './MuiThemeProvider';
import { useTheme } from '@mui/material/styles';

export default function NavBar() {
  const { mode, toggleMode } = useContext(ThemeModeContext);
  const theme = useTheme();
  return (
    <AppBar className='Appbar' position="relative" sx={{ backgroundColor: "transparent", boxShadow: 'none', width: '100%' }}>
      <Toolbar>
        {/* Theme Switch on the left */}
        <span style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
          <span role="img" aria-label="theme-icon" style={{ marginRight: 4 }}>
            {mode === 'dark' ? '🌙' : '☀️'}
          </span>
          <Switch checked={mode === 'dark'} onChange={toggleMode} color="default" />
        </span>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.text.primary }} />
        <div className='navTabs'>
          <Link href="/" >
            <Button sx={{ color: theme.palette.text.primary }}>Home</Button>
          </Link>
          <Link href="/Projects">
            <Button sx={{ color: theme.palette.text.primary }}>Projects</Button>
          </Link>
          <Link href="/Contact">
            <Button sx={{ color: theme.palette.text.primary }}>Contact</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

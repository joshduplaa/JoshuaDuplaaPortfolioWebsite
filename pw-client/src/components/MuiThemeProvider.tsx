"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#289726', // Your green color
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
          color: '#ffffff',
          boxShadow: 'none !important',
          backgroundImage: 'none !important',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
          backgroundImage: 'none !important',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
}
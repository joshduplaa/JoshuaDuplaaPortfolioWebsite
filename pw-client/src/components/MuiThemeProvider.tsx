"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useContext, useState } from "react";

// Create theme context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#289726', // Your green color
      },
      secondary: {
        main: isDarkMode ? '#ffffff' : '#202124',
      },
      background: {
        default: isDarkMode ? 'transparent' : '#fdfdfd',
        paper: isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.9)',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#202124',
        secondary: isDarkMode ? '#e0e0e0' : '#5f6368',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: isDarkMode ? '#ffffff' : '#202124',
            '&:hover': {
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(32, 33, 36, 0.1)',
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
            color: isDarkMode ? '#ffffff' : '#202124',
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
            color: isDarkMode ? '#ffffff' : '#202124',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#fafafa" },
    text: { primary: "#222" },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#121212" },
    text: { primary: "#fff" },
  },
});

export const ThemeModeContext = React.createContext({
  mode: "dark",
  toggleMode: () => {},
});

// Create a client-side Emotion cache instance
const clientSideEmotionCache = createEmotionCache();

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState("dark");
  const toggleMode = React.useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);
  const theme = mode === "light" ? lightTheme : darkTheme;
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeModeContext.Provider value={{ mode, toggleMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </CacheProvider>
  );
}
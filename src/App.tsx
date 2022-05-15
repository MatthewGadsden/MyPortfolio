import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from './context/themes/light-theme';
import darkTheme from './context/themes/dark-theme';
import './App.css';

import MyNavbar from "./layouts/my-navbar";
import Home from "./pages/home";
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import About from './pages/about';




function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MuiThemeProvider theme={darkTheme}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <MyNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;

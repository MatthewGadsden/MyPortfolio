import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import lightTheme from './context/themes/light-theme';
import darkTheme from './context/themes/dark-theme';
import './App.css';

import MyNavbar from "./layouts/my-navbar";
import Home from "./pages/home";
import Portfolio from './pages/portfolio';
import Experience from './pages/experience';
import About from './pages/about';
import styled from 'styled-components';


const Body = styled.body`
background-color: ${props => props.theme.palette.primary.main};
`

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MuiThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <MyNavbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/experience" element={<Experience />}/>
          </Routes>
        </StyledThemeProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;

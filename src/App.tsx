import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import MyNavbar from "./layouts/my-navbar";
import Home from "./pages/home";
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import About from './pages/about';


function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </div>
  );
}

export default App;

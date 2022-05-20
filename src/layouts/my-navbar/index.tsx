import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import './navbar.css';

const Navbar = styled.nav `
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  text-align: center;
`

const MyNavbar = () => {

  return (
    <div>
      <h1>Matthew Gadsden</h1>
      <Navbar>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </Navbar>
    </div>
  );
}

export default MyNavbar
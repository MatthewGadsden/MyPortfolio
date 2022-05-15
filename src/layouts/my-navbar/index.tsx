import { Switch } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import './navbar.css';

const NavbarWrapper = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  left: 0px;
  right: 0px;
  float: none;
  overflow: auto;
`

const Navbar = styled.nav`
  position: fixed;
  top: ${props => (props.theme.spacing(10))};
  right: 10%;
  width: 30rem;
  text-align: center;
`

const ListElement = styled.li`
  flex-grow: 1;
  a {
    display: block;
    color: ${props => props.theme.palette.primary.contrastText};
    text-align: center;
    padding: ${props => props.theme.spacing(4)};
    text-decoration: none;
    transition: all .3s ease-in-out;
    font-size: 18px;
  };
  a:hover {
    transform: scale(1.3);
    color: ${props => props.theme.palette.secondary.main};
  };
`

const NameHeader = styled.h1`
  color: ${props => props.theme.palette.primary.contrastText};
`

// eslint-disable-next-line
const waveSvg = 
  <div className="custom-shape-divider-top-1652017915">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
  </div>

interface MyNavbarProps {
  isDarkMode: boolean, 
  setIsDarkMode: React.Dispatch<React.SetStateAction<any>>;
}

const MyNavbar = (props: MyNavbarProps) => {
  const handleModeChange = () => {
    props.setIsDarkMode(!props.isDarkMode);
  };

  return (
    <NavbarWrapper>
        <NameHeader>Matthew Gadsden</NameHeader>
        <Navbar>
          <ul>
            <ListElement><Link to="/">Home</Link></ListElement>
            <ListElement><Link to="/about">About</Link></ListElement>
            <ListElement><Link to="/portfolio">Portfolio</Link></ListElement>
            <ListElement><Link to="/resume">Resume</Link></ListElement>

            <ListElement><Switch onChange={handleModeChange}/></ListElement>
          </ul>
        </Navbar>
    </NavbarWrapper>
  );
} 

export default MyNavbar
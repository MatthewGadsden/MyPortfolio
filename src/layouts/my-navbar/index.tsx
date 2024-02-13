import { Switch } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import './navbar.css';

const NavbarWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.palette.primary.dark};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  left: 0px;
  right: 0px;
  float: none;
  overflow: auto;

  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
  nav:last-of-type {
    margin-left: auto;
  }

  @media screen and (min-width: 500px){
    flex-direction: row;
    margin-left: 0;
  }
`;

const Navbar = styled.nav`
  display: flex;
  width: 30rem;
  text-align: center;
  justify-content: flex-end;
`;

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
`;

const NameHeader = styled.h1`
  margin: 0 5% 0 0;
  color: ${props => props.theme.palette.primary.contrastText};

  @media screen and (min-width: 500px){
    margin: 0 0 0 5%;
  }
`;

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
            <ListElement><Link to="/experience">Experience</Link></ListElement>
            
            <ListElement><Switch onChange={handleModeChange}/></ListElement>
          </ul>
        </Navbar>
    </NavbarWrapper>
  );
};

export default MyNavbar;

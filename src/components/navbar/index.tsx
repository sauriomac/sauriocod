import React from 'react';
import { NavBarMenu, Text, NavImg, List, Lis } from './NavBar';
import navimg from '../../asset/Logosvg.svg';


const NavBar = () => {
  return (
    <>
  <NavBarMenu>
  <NavImg src={navimg} />
  <List>
    <Lis>About</Lis>
    <Lis>Team</Lis>
    <Lis>Project</Lis>
    <Lis>Academy</Lis>
    <Lis>Contact</Lis>
  </List>

  
  </NavBarMenu>
    </>
  )
  }
export default NavBar;

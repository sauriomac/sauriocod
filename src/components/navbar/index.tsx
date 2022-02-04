import React, { useState } from "react";
import {
  NavBarMenu,
  NavImg,
  NavMenu,
  NavMobileIcon,
  Navlink,
  NavItem,
  NavContainer,
  NavLogo,
} from "./NavBar";
import navimg from "../../asset/Logosvg.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };
  const closeMobileMenu = () => setclick(false);

  return (
    <>
      <NavBarMenu>
        <NavContainer>
          <NavLogo to="/" onClick={handleClick}>
            <NavImg src={navimg} />
          </NavLogo>

          <NavMobileIcon onClick={handleClick}>
            {click ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </NavMobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <Navlink to="/" onClick={closeMobileMenu}>
                About
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="/about">Team</Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="/">Project</Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="/academy">Academy</Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="/contact">Contact</Navlink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </NavBarMenu>
    </>
  );
};
export default NavBar;

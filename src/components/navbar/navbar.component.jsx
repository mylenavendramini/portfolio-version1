import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";
import { Outlet } from "react-router-dom";

import { NavBarContainer, Logo, NavLinks, NavLink } from "./navbar.styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  //burger
  const node = useRef();

  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
        <NavLinks>
          <a href="/about">About</a>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact" spy={true} smooth={true}>
            Contact
          </NavLink>
        </NavLinks>
      </NavBarContainer>

      {/*     <Outlet />*/}
    </Fragment>
  );
};

export default NavBar;

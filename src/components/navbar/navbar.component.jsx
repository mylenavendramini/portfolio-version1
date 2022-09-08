import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";

import {
  NavBarContainer,
  Logo,
  LogoAbout,
  NavLinks,
  NavLink,
  AboutLink,
} from "./navbar.styles";

const NavBar = () => {
  //burger
  const node = useRef();

  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>

        <LogoAbout>
          <a href="/about">MV</a>
        </LogoAbout>

        <NavLinks>
          <a href="/about">About</a>
          <NavLink to="projects" spy={true} smooth={true}>
            Projects
          </NavLink>
          <NavLink to="contact" spy={true} smooth={true}>
            Contact
          </NavLink>
        </NavLinks>
        <AboutLink href="/about">ABOUT</AboutLink>
      </NavBarContainer>

      {/*     <Outlet />*/}
    </Fragment>
  );
};

export default NavBar;

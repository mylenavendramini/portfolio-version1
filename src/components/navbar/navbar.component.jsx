import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";

import {
  NavBarContainer,
  Logo,
  NavLinks,
  NavLink,
  LinkedinLink,
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

        <NavLinks>
          <a href="/about">About</a>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact" spy={true} smooth={true}>
            Contact
          </NavLink>
        </NavLinks>
        <LinkedinLink
          href="https://www.linkedin.com/in/mylena-vendramini-0ba475229/"
          target="_blank"
        >
          in
        </LinkedinLink>
      </NavBarContainer>

      {/*     <Outlet />*/}
    </Fragment>
  );
};

export default NavBar;

import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";

import {
  NavBarContainer,
  Logo,
  NavLinks,
  NavLink,
  AboutLink,
} from "./navbar.styles";

import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";

const NavBar = () => {
  //burger
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>

        <NavLinks>
          <a href="/about">About</a>
          <NavLink to="projects" spy={true} smooth={true}>
            Projects
          </NavLink>
          <NavLink to="contact" spy={true} smooth={true}>
            Contact
          </NavLink>
        </NavLinks>
        <div ref={node}>
          <Burger
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
          />
          <Menu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
        </div>
      </NavBarContainer>

      {/*     <Outlet />*/}
    </Fragment>
  );
};

export default NavBar;

import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";

import {
  NavBarContainer,
  Logo,
  NavLinks,
  NavLink,
  LinkToAbout,
} from "./navbar.styles";

import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";
import { Link } from "react-router-dom";

const NavBar = () => {
  //burger
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>

        <NavLinks>
          <Link onClick={scrollToTop} to="/about">
            About
          </Link>

          <Link onClick={scrollToTop} to="/dev">
            Dev
          </Link>

          <Link onClick={scrollToTop} to="/blog">
            Blog
          </Link>
          <Link onClick={scrollToTop} to="/websites">
            Websites
          </Link>
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

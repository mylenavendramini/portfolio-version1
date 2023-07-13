import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";
import {
  NavBarContainer,
  Logo,
  NavLinks,

} from "./navbar.styles";

import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helper";

const NavBar = () => {
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
        <NavLinks>
          <Link onClick={() => scrollToTop()} to="/about">
            About
          </Link>
          <Link onClick={() => scrollToTop()} to="/portfolio">
            Portfolio
          </Link>
          <Link onClick={() => scrollToTop()} to="/skills">
            Skills
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
    </>
  );
};

export default NavBar;

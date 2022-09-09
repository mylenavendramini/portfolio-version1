import React, { Fragment } from "react";
import { StyledMenu, Logo, NavLink } from "./menu.styles";
import { bool } from "prop-types";

// import { TadaAnimation } from "../../animation";

const Menu = ({ isBurgerOpen }) => {
  return (
    <Fragment>
      <StyledMenu isBurgerOpen={isBurgerOpen}>
        <Logo>
          <a href="/">MV</a>
        </Logo>

        <a href="/about">About</a>
      </StyledMenu>
    </Fragment>
  );
};
Menu.propTypes = {
  isBurgerOpen: bool.isRequired,
};
export default Menu;

import React, { Fragment } from "react";
import { StyledMenu, Logo } from "./menu.styles";
import { bool } from "prop-types";

const Menu = ({ isBurgerOpen }) => {
  return (
    <Fragment>
      <StyledMenu isBurgerOpen={isBurgerOpen}>
        <Logo>
          <a href="/">MV </a>
        </Logo>
        <a href="/portfolio">Portfolio</a>
        <a href="/skills">Skills</a>
        <a href="/about">About</a>
      </StyledMenu>
    </Fragment>
  );
};
Menu.propTypes = {
  isBurgerOpen: bool.isRequired,
};
export default Menu;

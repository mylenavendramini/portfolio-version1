import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledMenu = styled.nav`
  /* display: flex; */
  display: none;
  flex-direction: column;
  justify-content: center;
  background-color: var(--text-primary);
  color: var(--text-primary);
  height: 100%;
  text-align: center;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 9;
  transition: transform 0.6s ease-in-out;
  transform: ${({ isBurgerOpen }) =>
    isBurgerOpen ? "translateX(0%)" : "translateX(100%)"};

  @media only screen and (max-width: 800px) {
    display: flex;
    width: 100%;
  }

  @media only screen and (min-width: 1000px) {
    transition: transform 0.3s ease-in-out;
    transform: ${({ isBurgerOpen }) =>
      isBurgerOpen ? "translateX(100%)" : "translateX(100%)"};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    letter-spacing: 5px;
    transition: color 0.3s linear;
    background-color: var(--text-primary);
    color: var(--background);
    padding: 1rem;
    outline: none;
    text-shadow: none;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 2px var(--background);
    }
  }
`;

export const Logo = styled.div`
  font-family: "Pacifico", cursive;
  background-color: transparent;
  margin-bottom: 5rem;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const AboutLink = styled(Link)`
  cursor: pointer;
`;

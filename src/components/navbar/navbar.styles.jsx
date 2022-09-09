import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export const NavBarContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--text-primary);
  color: var(--background);
  position: sticky;
  z-index: 20;
  top: 0;

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }

  h1 {
    /* display: none; */
    font-size: 4.5rem;
    text-align: center;
    margin-left: 13rem;
    margin-top: 3rem;
    text-shadow: 0 0 2px #ffffff;
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
  }

  h3 {
    display: none;
    font-size: 1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  a {
    font-family: "Pacifico", cursive;
    font-size: 1.3rem;
    text-align: center;
    text-decoration: none;
    background-color: var(--text-primary);
    color: var(--background);

    @media only screen and (max-width: 800px) {
      padding-left: 2.5rem;
    }
  }
`;

export const NavLinks = styled.div`
  text-align: center;

  @media only screen and (max-width: 800px) {
    display: none;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding-left: 2.5rem;
    background-color: var(--text-primary);
    color: var(--background);
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const AboutLink = styled.a`
  display: none;
  position: absolute;
  left: 0.11rem;
  text-decoration: none;
  padding: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding-left: 2.5rem;
  background-color: var(--text-primary);
  color: var(--background);

  &:hover {
    text-shadow: 0 0 1px var(--background);
  }

  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;

import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.div`
  padding: 1rem;
  height: 8vh;
  width: 100%;
  display: none;
  justify-content: space-around;
  align-items: center;
  background-color: var(--text-primary);
  color: var(--background);

  @media only screen and (max-width: 800px) {
    display: flex;
    position: sticky;
    bottom: 0;
    z-index: 20;
  }

  /* a:after {
    content: "";
    display: block;
    width: 2px;
  } */
`;

export const Logo = styled.div`
  a {
    font-family: "Pacifico", cursive;
    font-size: 1.3rem;
    text-align: center;
    text-decoration: none;
    background-color: var(--text-primary);
    color: var(--background);
  }
`;

export const FooterLinks = styled.div`
  text-align: center;

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

export const FooterLink = styled(Link)`
  cursor: pointer;
`;

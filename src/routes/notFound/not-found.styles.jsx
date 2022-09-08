import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-height: 90vh;
  padding: 10rem 4rem 10rem 4rem;
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 650px) {
    padding: 5rem 0 0 0;
    margin: 0 2rem 0 2rem;
  }

  h3 {
    text-align: justify;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.2rem;
    text-align: justify;
    letter-spacing: 1px;
  }
`;

export const NavBarContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--text-primary);
  color: var(--background);
  position: fixed;
  z-index: 999;
  top: 0;

  @media only screen and (max-width: 800px) {
    display: none;
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
  }
`;

export const FooterContainer = styled.div`
  padding: 1rem;
  height: 8vh;
  width: 100%;
  display: none;
  margin-right: 5rem;
  justify-content: space-around;
  align-items: center;
  background-color: var(--text-primary);
  color: var(--background);

  @media only screen and (max-width: 800px) {
    display: flex;
    position: fixed;
    bottom: 0;
  }

  a:after {
    content: "";
    display: block;
    width: 2px;
  }
`;

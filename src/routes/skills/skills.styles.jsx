import styled from "styled-components";
import { Link } from "react-scroll";

export const SkillsContainer = styled.div`
  padding: 2rem 4rem 2rem 4rem;
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 0 1rem 0;
    margin-bottom: 8rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 3rem 0rem 0 1rem;
  }

  h1 {
    text-align: justify;
    margin-top: 12rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 30px;
    letter-spacing: 1px;
    font-weight: 500;

    @media only screen and (max-width: 650px) {
      margin-top: 3rem;
      font-size: 1.4rem;
    }
  }

  h6 {
    a {
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 800;
      transition: color 0.1s;
      color: var(--text-primary);
      outline: none;
      text-shadow: none;
      border: 1.5px solid var(--text-primary);
      border-radius: 10%;
      padding: 0px 3px 0px 3px;
      cursor: pointer;

      &:hover {
        color: var(--text-secondary);
        border: 1.5px solid var(--text-secondary);
      }
    }
  }

  h4 {
    font-size: 1.5rem;
    text-align: justify;
    letter-spacing: 2px;
  }

  h5 {
    text-align: justify;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 1.3rem;
    line-height: 30px;
    letter-spacing: 0.51px;
    font-weight: 500;

    a {
      /* color: var(--text-secondary); */
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
  }

  p {
    text-align: justify;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 1.3rem;
    line-height: 40px;
    letter-spacing: 1px;
    font-weight: 500;
    background-color: var(--background);

    @media only screen and (max-width: 1050px) {
      padding-bottom: 12rem;
      padding-top: 1rem;
      text-align: left;
    }

    a {
      /* color: var(--text-secondary); */
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
  }

  a {
    /* color: var(--text-secondary); */
    font-size: 1.5rem;
    font-weight: 700;
    transition: color 0.3s linear;
    color: var(--text-primary);
    outline: none;
    text-shadow: none;

    /* &:hover {
      text-shadow: 0 0 1px var(--text-primary);
    } */
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: repeat(4, 1fr);

  h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1350px) {
    display: block;

    h5 {
      padding: 0rem;
      margin: 0 1rem 1rem 1rem;
    }
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

  h1 {
    display: none;
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
  }
`;

export const NavLinks = styled.div`
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

export const NavLink = styled(Link)`
  cursor: pointer;
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

  a {
    text-align: center;
    text-decoration: none;
    padding: 0.5rem;
    letter-spacing: 4px;
    background-color: var(--text-primary);
    color: var(--background);
    justify-items: center;
  }

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

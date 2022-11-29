import styled from "styled-components";
import { Link } from "react-scroll";

export const AboutContainer = styled.div`
  padding: 10rem 4rem 10rem 4rem;
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 10rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 10rem 0 1rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 2.8rem 0 0 0;
    margin: 0 2rem 0 2rem;
  }

  h2 {
    font-size: 1.8rem;
    display: inline;
    letter-spacing: 2px;

    @media only screen and (max-width: 650px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    display: inline;
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
    letter-spacing: 1px;
    margin-top: 12rem;
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
    letter-spacing: 0.5px;
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

  #aboutme {
    padding-bottom: 0rem;
    margin-bottom: 0rem;

    @media only screen and (max-width: 1150px) {
      margin-bottom: -5rem;
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

export const ScrollDown = styled(Link)`
  h6 {
    text-align: center;
    cursor: pointer;
    font-size: 1.3rem;
    line-height: 30px;
    letter-spacing: 1px;
    font-weight: 500;
    color: var(--text-primary);
    transition: color 0.2s;

    @media only screen and (max-width: 650px) {
      margin-top: 4rem;
    }

    &:hover {
      color: var(--text-secondary);
    }
  }
`;

export const Gray = styled.h3`
  background: linear-gradient(
    to right,
    var(--text-secondary) 20%,
    var(--text-primary) 40%,
    var(--text-secondary) 60%,
    var(--text-primary) 80%
  );
  background-size: 200% auto;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s ease-in-out infinite;
  @keyframes shine {
    to {
      background-position: 100% center;
    }
  }
`;

export const LinkedinLink = styled.a`
  text-decoration: none;
  /* padding: 1rem; */
  position: absolute;
  font-size: 1rem;
  font-weight: 800;
  transition: color 0.1s;
  background-color: transparent;
  color: var(--background);
  outline: none;
  text-shadow: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 1px var(--background);
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1350px) {
    display: block;

    h5 {
      padding: 0rem;
      margin: 1rem 1rem 1rem 1rem;
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

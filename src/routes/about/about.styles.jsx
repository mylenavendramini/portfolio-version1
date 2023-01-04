import styled from "styled-components";

export const AboutContainer = styled.div`
  /* padding: 10rem 4rem 10rem 4rem;
  margin: 0 4rem 0 4rem; */
  margin: 0rem 4rem;
  padding: 2rem 4rem 10rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 2rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 2rem 0 1rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 2rem 0 0 0;
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
  /* 
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
  } */

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
  }

  h5 {
    /* margin-top: 5rem;
    margin-bottom: 5rem; */
    text-align: justify;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.5px;

    a {
      text-decoration: underline;
    }
  }
  /* 
  #aboutme {
    padding-bottom: 0rem;
    margin-bottom: 0rem;

    @media only screen and (max-width: 1150px) {
      margin-bottom: -5rem;
    }
  } */

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
    }
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

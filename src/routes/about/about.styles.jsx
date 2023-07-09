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
    padding: 2rem 0 6rem 0;
    margin: 0 2rem 0 2rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;

    @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1.5rem;
      font-weight: 500;
    }
    a {
      color: var(--text-tertiary);
    }
  }

  h4 {
    font-size: 1.5rem;
    text-align: justify;
    letter-spacing: 1px;
  }


  a {
    /* color: var(--text-secondary); */
    font-size: 1.5rem;
    font-weight: 700;
    transition: color 0.3s linear;
    color: var(--text-primary);
    outline: none;
    text-shadow: none;

  }
`;

export const AboutGrid = styled.div`
  display: grid;
  align-self: center;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  img {
    width: 100%;
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

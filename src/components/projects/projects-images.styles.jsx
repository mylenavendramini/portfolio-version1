import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 10rem 4rem 10rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 3rem 1rem 3rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 3rem 1rem 4rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 1rem 0 1rem;
  }

  h1 {
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 5rem;
    letter-spacing: 1px;
  }

  h4 {
    text-align: left;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
    background-color: white;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: justify;
    padding: 1rem 0;
    color: black;
    background-color: white;

    @media only screen and (max-width: 650px) {
      font-weight: 600;
      font-size: 1.3rem;
    }
  }

  #img-1 {
    margin: 1rem;
  }

  h1,
  h4 {
    @media only screen and (max-width: 650px) {
      text-align: center;
    }
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 2rem 0; */

  /* @media only screen and (max-width: 1050px) {
    margin: -0.2rem -5rem;
  }

  @media only screen and (max-width: 950px) {
    margin: -0.2rem -6rem;
  }*/
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
  background-color: white;

  /* @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  } */

  @media only screen and (max-width: 1600px) {
    gap: 0rem;

    img {
      width: 95%;
    }
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      padding: 0rem 2rem;
      background-color: transparent;
    }
  }
`;

export const TextContainer = styled.div`
  background-color: white;

  @media only screen and (max-width: 650px) {
    margin: 1rem;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: transparent;

  @media only screen and (max-width: 850px) {
    padding: 1.2rem 0rem;
  }

  @media only screen and (max-width: 650px) {
    justify-content: center;
  }

  a {
    border: 2px solid var(--text-primary);
    padding: 0.1rem 0.5rem;

    &:hover {
      box-shadow: 1px 3px black;
    }
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

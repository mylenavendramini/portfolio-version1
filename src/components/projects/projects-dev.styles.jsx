import styled from "styled-components";

export const ProjectsContainer = styled.div`
  @media only screen and (max-width: 1050px) {
    padding: 0rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 0 1rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 0rem;
  }

  h1 {
    font-size: 1.5rem;
    text-align: justify;
    margin-top: 5rem;
    margin-bottom: 5rem;
    letter-spacing: 1px;
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 30px;
    text-align: justify;

    @media only screen and (max-width: 650px) {
      font-weight: 600;
    }
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--text-primary);
  padding: 1rem;
  height: 100%;

  &:hover {
    box-shadow: 1px 3px;
  }

  @media only screen and (max-width: 650px) {
    margin: 3rem 2rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.div`
  display: flex;
  background-color: transparent;

  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }

  a {
    border: 2px solid var(--text-primary);
    padding: 0.1rem 0.5rem;
    margin: 2rem;
    text-align: center;

    &:hover {
      box-shadow: 1px 3px black;
    }
    @media only screen and (max-width: 650px) {
      margin: 0.5rem;
    }
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

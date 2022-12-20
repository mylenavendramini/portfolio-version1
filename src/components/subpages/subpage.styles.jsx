import styled from "styled-components";

export const SubpageContainer = styled.div`
  padding: 10rem 4rem 10rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 0 1rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 1rem 0 1rem;
  }

  h1 {
    text-align: justify;
    font-size: 1.5em;
    letter-spacing: 1px;
  }

  h2 {
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const SubpageGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SubpageImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--text-primary);

  &:hover {
    box-shadow: 1px 3px;
  }
`;

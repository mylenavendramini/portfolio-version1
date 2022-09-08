import styled from "styled-components";

export const AppContainer = styled.div`
  /* display: flex; */
`;

export const HomeContainer = styled.div`
  /* background-color: white; */
  background-color: var(--background);
  /* color: black; */
  color: var(--text-primary);
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 650px) {
    margin: 0 2rem 0 2rem;
  }
`;

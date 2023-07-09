import styled from "styled-components";

export const PresentationContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 2rem;
  padding: 2rem 6rem 0rem 2rem;
  min-height: 20vh;

  @media only screen and (max-width: 950px) {
    padding: 1rem 0 1rem 0;
    margin: 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 1rem 0 0 1rem;
    margin: 2rem 1rem;
  }

`;

export const PresentationMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.7rem;
    font-weight: 500;

    @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1.5rem;
      font-weight: 500;
    }
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
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 1px;

    @media only screen and (max-width: 650px) {
      font-size: 3.3rem;
      letter-spacing: 2px;
      font-weight: 800;
      display: flex;
      margin-bottom: 1rem;
    }
  }
`

export const PresentationAnimation = styled.div`
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`

export const Gradient = styled.h1`
  background: linear-gradient(
    to right,
    var(--text-primary) 20%,
    var(--text-tertiary) 30%,
    var(--text-primary) 80%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 15s ease-in-out infinite;
  @keyframes shine {
    to {
      background-position: 100% center;
    }
  }
`;

export const SubpageContainer = styled.div`
  margin-top: 3rem;
  margin-right: 25rem;
  text-align: center;


  @media only screen and (max-width: 950px) {
    margin-right: 10rem;
  }
`;

export const SubpageImage = styled.div`
  border: 2px solid var(--text-tertiary);
  padding: 0.5rem;


  h2 {
    font-size: 1.3rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight:bold;
    cursor: pointer;
  }

`;

export const ContactContainer = styled.div`
  padding: 2rem 4rem 14rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 4rem 4rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 4rem 4rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 1rem 4rem 1rem;
    margin: 5rem 1rem;
  }
`;

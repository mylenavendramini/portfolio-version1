import styled from "styled-components";

export const PresentationContainer = styled.div`
  padding: 2rem 4rem 2rem 4rem;
  align-items: center;
  align-content: center;
  align-self: center;
  text-justify: center;
  min-height: 70vh;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 0 1rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 3rem 0rem 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 30px;
    letter-spacing: 2px;

    @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 3px;
    line-height: 30px;

    @media only screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  h1 {
    font-size: 8rem;
    letter-spacing: 16px;
    margin-top: 0rem;
    padding: 0;

    @media only screen and (max-width: 1200px) {
      letter-spacing: 8px;
    }

    @media only screen and (max-width: 1050px) {
      font-size: 7rem;
    }

    @media only screen and (max-width: 850px) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 3.5rem;
      letter-spacing: 2px;
      font-weight: 800;
    }
  }

  h6 {
    margin-top: 0rem;
    padding: 0;
    display: none;

    @media only screen and (max-width: 550px) {
      font-size: 3rem;
      letter-spacing: 2px;
      font-weight: 800;
      display: flex;
      margin-bottom: 1rem;
    }
  }

  h5 {
    font-size: 1.5rem;
    line-height: 30px;
    margin-top: -3rem;
    letter-spacing: 2px;
    margin-right: 5rem;

    @media only screen and (max-width: 1350px) {
      margin-right: 8rem;
    }

    @media only screen and (max-width: 1050px) {
      margin-top: 0;
      margin-right: 5rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1.2rem;
      font-weight: 500;
      margin-right: 3rem;
    }
  }
`;

export const Gradient = styled.h1`
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
  animation: shine 10s ease-in-out infinite;
  @keyframes shine {
    to {
      background-position: 100% center;
    }
  }

  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

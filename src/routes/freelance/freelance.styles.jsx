import styled from "styled-components";

export const FreelanceContainer = styled.div`
  padding: 4rem 4rem 6rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 1rem 1rem 1rem;
  }

  h6 {
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;

    @media only screen and (max-width: 650px) {
      font-size: 1.6rem;
    }
  }
`;

export const Gradient = styled.h6`
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
`;

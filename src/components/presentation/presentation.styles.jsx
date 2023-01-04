import styled from "styled-components";

export const PresentationContainer = styled.div`
  margin: 0rem 10rem;
  padding: 2rem 4rem 2rem 4rem;
  align-items: center;
  align-content: center;
  align-self: center;
  text-justify: center;
  min-height: 70vh;
  text-align: center;

  @media only screen and (max-width: 1250px) {
    margin: 0;
    text-align: left;
    padding: 1rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 0 1rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 1rem 1rem 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.5px;

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
    letter-spacing: 2px;
    line-height: 30px;

    @media only screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  #central {
    text-align: center;
    padding: 2rem;
    font-weight: 500;
    text-decoration: underline var(--text-primary);
    text-underline-offset: 10px;

    @media only screen and (max-width: 850px) {
      padding: 0rem 0rem 2rem 0rem;
      font-size: 1.2rem;
      display: block;
      margin: 0;
    }
  }

  h1 {
    font-size: 6rem;
    font-weight: 800;
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
      font-size: 3.3rem;
      letter-spacing: 2px;
      font-weight: 800;
      display: flex;
      margin-bottom: 1rem;
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
    font-weight: 500;
    line-height: 30px;
    margin-top: -3rem;
    letter-spacing: 1px;
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
`;

export const SubpageContainer = styled.div`
  /* padding: 10rem 4rem 10rem 4rem; */
  /* margin-right: 10rem; */

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  /* @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  } */

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
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
`;

import styled from "styled-components";

export const DevContainer = styled.div`
  /* padding: 10rem 4rem 10rem 4rem; */
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

  h4 {
    font-size: 1.5rem;
    text-align: justify;
    letter-spacing: 1px;
    /* margin-top: 12rem; */
  }

  h1 {
    font-size: 1.5rem;
    text-align: left;
    font-weight: 500;

    a {
      /* color: rgb(78, 75, 75); */
      text-decoration: underline;
    }

    @media only screen and (max-width: 650px) {
      font-size: 1.3rem;
    }
  }
`;

export const DevContact = styled.div`
  h4 {
    font-size: 1.5rem;
    text-align: justify;
    letter-spacing: 1px;
    margin-top: 12rem;
  }

  h5 {
    text-align: justify;
    /* margin-top: 5rem;
    margin-bottom: 5rem; */
    font-size: 1.3rem;
    line-height: 40px;
    letter-spacing: 0.5px;
    font-weight: 500;
    background-color: var(--background);

    @media only screen and (max-width: 1050px) {
      padding-bottom: 12rem;
      padding-top: 1rem;
      text-align: left;
    }

    a {
      /* color: var(--text-secondary); */
      font-size: 1.3rem;
      letter-spacing: 2px;
      font-weight: bold;
    }
  }
`;

import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 8rem 4rem 14rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 4rem 4rem 2rem;
  }

  @media only screen and (max-width: 950px) {
    padding: 1rem 4rem 4rem 0;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 0rem 4rem 0.5rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }

  h1 {
    font-size: 1.5rem;
    text-align: justify;
    margin-bottom: 4rem;
    letter-spacing: 1px;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 30px;
    letter-spacing: 0.5px;
    font-weight: 500;

    @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }

  a {
    text-decoration: none;
    /* padding: 1rem; */
    font-size: 1.5rem;
    font-weight: 700;
    transition: color 0.3s linear;
    color: var(--text-primary);
    outline: none;
    text-shadow: none;

    @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }
`;

export const LinkedinLink = styled.a``;

import styled from "styled-components";

export const BusinessContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: justify;
    /* margin-bottom: 4rem; */
    letter-spacing: 1px;
  }

  h3 {
    text-align: justify;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.5px;
  }

  #reason {
    margin-top: 4rem;
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

export const BusinessImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--text-primary);
  cursor: pointer;

  @media only screen and (max-width: 650px) {
    padding: 0.5rem 1rem;

    h1 {
      text-align: center;
    }
  }

  &:hover {
    box-shadow: 1px 3px;
  }
`;

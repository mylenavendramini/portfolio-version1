import styled from "styled-components";

export const ContactContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: justify;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 500;
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
  }
`;

export const FormContainer = styled.div`
  display: flex;

  input,
  button {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem;
    border: 2px solid var(--text-primary);
    box-shadow: 1px 3px;
    display: block;
    align-items: center;
    width: 65rem;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 950px) {
      width: 90%;
    }

    @media only screen and (max-width: 650px) {
      width: 20rem;
    }
  }

  button {
    width: 6rem;
    cursor: pointer;
    font-weight: bold;
  }

  textarea {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem;
    border: 2px solid var(--text-primary);
    box-shadow: 1px 3px;
    display: block;
    align-items: center;
    width: 65rem;
    font-family: inherit;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 950px) {
      width: 90%;
    }

    @media only screen and (max-width: 650px) {
      width: 20rem;
    }
  }

  @media only screen and (max-width: 928px) {
    /* display: block;
    margin-left: 0rem;
    margin-right: 0rem; */
  }
`;

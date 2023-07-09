import styled from "styled-components";

export const ContactContainer = styled.div`
  p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    transition: color 0.3s linear;
    color: var(--text-tertiary);
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
      width: 15rem;
    }

  }

  button {
    width: 6rem;
    cursor: pointer;
    font-weight: bold;
    color: var(--text-tertiary);
    border: 2px solid var(--text-tertiary);

    &:hover{
      background-color: var(--text-tertiary);
      color: var(--background)
    }
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
      width: 15rem;
    }
  }

  @media only screen and (max-width: 928px) {
    /* display: block;
    margin-left: 0rem;
    margin-right: 0rem; */
  }
`;

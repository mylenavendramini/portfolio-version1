import styled from "styled-components";

export const PopUpContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  background-color: transparent;
  padding: 1rem 2rem;
  /* box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3); */
  z-index: 1000;
  transition: all 0.5s;

  @media only screen and (max-width: 1250px) {
    width: 100%;
  }

  @media only screen and (max-width: 1050px) {
    width: 80%;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Modal = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  gap: 3rem;
  background-color: var(--background);
  padding: 2rem;

  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 650px) {
  }
`;

export const ModalImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: var(--text-primary); */
  padding: 1rem;

  @media only screen and (max-width: 1050px) {
    padding: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const ModalContent = styled.div`
  /* width: 100%; */
  padding: 10px 5px;
  background-color: var(--background);

  @media only screen and (max-width: 1050px) {
  }

  h3 {
    font-size: 1.5rem;
    line-height: 30px;
    text-align: center;
    background-color: var(--background);

    @media only screen and (max-width: 1050px) {
      margin-top: -2rem;
      font-size: 1.2rem;
      line-height: 3px;
    }
  }

  h2 {
    font-size: 1.2rem;
    line-height: 30px;
    text-align: justify;
    background-color: var(--background);

    @media only screen and (max-width: 1050px) {
      font-size: 1rem;
      line-height: 25px;
    }
  }
`;

export const ModalClose = styled.a`
  color: inherit;
  position: absolute;
  /* margin-left: 63rem;
  margin-top: -1.5rem; */
  top: 2rem;
  right: 4rem;
  font-size: 3rem;
  cursor: pointer;
  border: none;
  background: none;
  color: var(--text-primary);
  /* border-radius: 10px; */
  transition: all 0.3s linear;

  @media only screen and (max-width: 1000px) {
  }
`;

export const WebsiteButton = styled.button`
  margin-top: 0.5rem;
  display: flex;
  width: auto;
  height: 50px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 4px;
  transition: color 0.3s linear;
  background-color: var(--text-primary);
  color: var(--background);
  padding: 0 2rem 0 2rem;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a``;

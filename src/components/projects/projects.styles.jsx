import styled from "styled-components";
import Popup from "reactjs-popup";

export const ProjectsContainer = styled.div`
  padding: 3rem 4rem 3rem 4rem;

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
    font-size: 1.5rem;
    text-align: justify;
    margin-bottom: 5rem;
    letter-spacing: 1px;
  }

  h3 {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 30px;
    text-align: justify;
    padding: 1rem;

    @media only screen and (max-width: 650px) {
      font-weight: 600;
    }
  }

  #projects {
    color: var(--background);
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--text-primary);

  &:hover {
    box-shadow: 1px 3px;
    h3 {
      text-shadow: 0 0 1px var(--text-primary);
    }
  }

`;

export const PopUpButtom = styled.button`
  cursor: pointer;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;


`;

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    /* background: rgba(0, 0, 0, 0.5); */
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }
  [data-popup="tooltip"].popup-overlay {
  }

  &-arrow {
    display: none;
  }
`;

export const Programs = styled.div`
  display: flex;
  align-self: center;
  justify-content: left;
  align-items: center;
  flex-wrap:wrap;

  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }

  h4 {
    font-size: 1rem !important;
    padding: 0.5rem;
    font-weight: 500;
    color: var(--text-tertiary);
    background-color: var(--text-secondary);
    /* border: 2px solid var(--text-tertiary); */
    margin-right: 0.3rem;

    @media only screen and (max-width: 650px) {
      font-size: 0.5rem;
      letter-spacing: 1px;
    }
  }


`;

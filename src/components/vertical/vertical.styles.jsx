import styled from "styled-components";
// import { Link } from "react-router-dom";

import { Link } from "react-scroll";

export const VerticalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 80%;
  padding-left: 1.1rem;
`;

export const LinkedinLink = styled(Link)`
  text-decoration: none;
  /* padding: 1rem; */
  font-size: 1.5rem;
  font-weight: 800;
  transition: color 0.1s;
  color: var(--text-primary);
  outline: none;
  text-shadow: none;
  border: none;

  &:hover {
    text-shadow: 0 0 1px var(--text-primary);
  }

  @media only screen and (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
`;

export const RightContainer = styled.div`
  transform: rotate(90deg);
  width: 5rem;
  position: fixed;
  right: 0;
  top: 45%;
  border: none;
`;

export const LeftContainer = styled.div`
  transform: rotate(270deg);
  width: 3.2rem;
  position: fixed;
  left: 0;
  bottom: 22%;
  border: none;
`;

export const VerticalLinks = styled.div`
  text-align: center;
  border: none;

  a {
    text-decoration: none;
    border: none;
    padding: 1rem;
    letter-spacing: 4px;
  }

  @media only screen and (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
`;

export const VerticalLink = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 1rem;
  letter-spacing: 4px;
  cursor: pointer;
`;

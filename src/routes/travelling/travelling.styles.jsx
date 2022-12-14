import styled from "styled-components";

export const PostsContainer = styled.div`
  padding: 1rem 4rem 6rem 4rem;
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 0rem 2rem 1rem 2rem;
    margin: 0 1rem 0 1rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 0rem 0rem 1rem 0rem;
    margin: 1rem;
  }

  h1,
  h2,
  h6 {
    font-family: "Rampart One", cursive;
    color: var(--tangerine);
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    padding-top: 1rem;
    letter-spacing: 1px;

    &::before {
      content: "";
      border-top: 3px dotted var(--peach);

      padding-top: 1rem;
      display: block;
    }

    &::after {
      content: "";
      margin-top: 1rem;
      border-bottom: 3px dotted var(--peach);
      width: 100%;
      display: block;
    }
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    letter-spacing: 1px;
  }

  h2,
  a,
  img {
    background-color: var(--rose);
  }

  h3 {
    text-align: justify;
    font-size: 1.3rem;
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

  h6 {
    font-size: 4rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;

    @media only screen and (max-width: 650px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    margin-bottom: 4rem;
  }
`;

export const AllPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  margin: 0rem;
  align-items: center;

  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AllPostImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dotted var(--peach);
  padding: 1.5rem 2rem;
  height: 100%;
  width: 100%;
  background-color: var(--rose);

  img {
    width: 100%;
    padding: 1rem;
  }

  &:hover {
    transform: scale(1.01);
  }

  @media only screen and (max-width: 650px) {
    margin: 3rem 2rem;
  }
`;

export const Gradient = styled.h6`
  background: linear-gradient(
    to right,
    var(--peach) 20%,
    var(--aqua) 40%,
    var(--peach) 60%,
    var(--aqua) 80%
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

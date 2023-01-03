import styled from "styled-components";

export const PostsContainer = styled.div`
  padding: 6rem 4rem 6rem 4rem;
  margin: 0 4rem 0 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 2rem 1rem 2rem;
    margin: 0 1rem 0 1rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 4rem 0rem 1rem 0rem;
    margin: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    padding-top: 1rem;
    letter-spacing: 1px;

    &::before {
      content: "";
      border-top: 2px solid var(--text-primary);

      padding-top: 1rem;
      display: block;
    }

    &::after {
      content: "";
      margin-top: 1rem;
      border-bottom: 2px solid var(--text-primary);
      width: 100%;
      display: block;
    }
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 1px;
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
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;

    @media only screen and (max-width: 650px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
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
  border: 2px solid var(--text-primary);
  padding: 1.5rem 2rem;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    padding: 1rem;
  }

  &:hover {
    box-shadow: 1px 3px;
  }

  @media only screen and (max-width: 650px) {
    margin: 3rem 2rem;
  }
`;

export const Gradient = styled.h6`
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

export const PostContent = styled.div`
  padding: 5rem 15rem;

  @media only screen and (max-width: 1350px) {
    padding: 5rem 10rem;
  }

  @media only screen and (max-width: 1150px) {
    padding: 5rem 5rem;
  }

  @media only screen and (max-width: 850px) {
    padding: 5rem 0rem;
  }
`;

export const PostImage = styled.div`
  text-align: center;

  

  img {
    @media only screen and (max-width: 1350px) {
      width: 100%;
    }

    @media only screen and (max-width: 850px) {
      width: 100%;
    }
  }
`;

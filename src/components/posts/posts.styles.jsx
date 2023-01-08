import styled from "styled-components";

export const PostsContainer = styled.div`
  /* padding: 6rem 4rem 6rem 4rem;
  margin: 0 4rem 0 4rem; */
  margin: 0rem 4rem;
  padding: 1rem 4rem 10rem 4rem;

  @media only screen and (max-width: 1050px) {
    padding: 1rem 2rem 1rem 2rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 2rem 0 0 0;
    margin: 0 2rem 0 2rem;
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

  .flex {
    display: flex;
    margin-bottom: 2rem;
  }

  button {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0.5rem;
    border: 2px solid var(--text-primary);
    box-shadow: 1px 3px;
    display: block;
    align-items: center;
    width: 18rem;
    cursor: pointer;
    margin-right: 1rem;
    text-transform: uppercase;

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

  .desktopButton {
    display: flex;

    @media only screen and (max-width: 750px) {
      display: none;
    }
  }

  .responsiveButton {
    display: none;

    @media only screen and (max-width: 750px) {
      display: flex;
      justify-content: center;
    }
  }

  #categories {
    padding-top: 0.1rem;
  }

  #allposts {
    padding-top: 0.1rem;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 0rem;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 750px) {
    display: flex !important;
    flex-direction: column;
  }
`;

export const AllPostImage = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--text-primary);
  padding: 1rem;
  height: 100%;
  width: 100%;
  overflow: auto;

  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    /* padding: 1rem; */
  }

  h3 {
    padding: 0.5rem 1rem;
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
  padding: 3rem 35rem 3rem 4rem;
  margin: 0rem 4em;

  @media only screen and (max-width: 1150px) {
    padding: 3rem 0rem;
  }

  @media only screen and (max-width: 850px) {
    padding: 3rem 0rem;
  }

  h3 {
    text-align: justify;
    font-size: 1.3rem;
    line-height: 30px;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-indent: 20px;

    @media only screen and (max-width: 1200px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 650px) {
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }
`;

export const PostImage = styled.div`
  text-align: center;

  img {
    @media only screen and (max-width: 850px) {
      width: 100%;
    }
  }
`;

export const ContainerWithSideBar = styled.div`
  /* display: grid;
  align-self: center;
  grid-template-columns: 2fr 1fr;
  gap: 2rem; */
  padding-bottom: 4rem;

  h1 {
    font-size: 1.5rem;
    text-align: center;
    padding-top: 5rem;
    letter-spacing: 1px;

    &::before {
      content: "";
      border-top: 2px solid var(--text-primary);
      padding-top: 1rem;
      display: block;
      width: 100%;
    }
    &::after {
      content: "";
      margin-top: 1rem;
      border-bottom: 2px solid var(--text-primary);
      width: 100%;
      display: block;
    }
  }
`;

export const GaleryPosts = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 3rem;
  right: 0;
  align-items: center;

  h2 {
    text-align: center;
  }

  @media only screen and (max-width: 1150px) {
    position: relative;

    margin: 1rem;
    border: none;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 10rem;
  }
`;

export const GaleryImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--text-primary);
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  /* height: 100%; */
  width: 40%;

  img {
    width: 100%;
    /* padding: 1rem; */
  }

  &:hover {
    box-shadow: 1px 3px;
  }
`;

export const Logo = styled.div`
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

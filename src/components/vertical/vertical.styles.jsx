import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export const VerticalContainer = styled.div`
  position: fixed;
  left: 0;
  /* top: 80%; */
  padding-left: 1.1rem;
`;

export const LinkedinLink = styled.a`
  text-decoration: none;
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  transition: color 0.1s;
  color: var(--text-primary);
  outline: none;
  text-shadow: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 1px var(--text-primary);
  }

  @media only screen and (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
`;

export const TestLink = styled.a`
  text-align: center;
  margin-top: 1rem;
  margin-left: 1rem;

  /* 
  #githubImgBlack {
    background-color: red;
    &:before {
      content: "";
      background-image: var(--githubBlack);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 280px;
      left: 0px;
    }
  }

  #githubImgWhite {
    background-color: green;
    &:before {
      content: "";
      background-image: var(--githubWhite);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 280px;
      left: 0px;
    }
  }

  #linkedinImgBlack {
    background-color: red;
    &:before {
      content: "";
      background-image: var(--linkedinBlack);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 210px;
      left: 0px;
    }
  }

  #linkedinImgWhite {
    background-color: green;
    &:before {
      content: "";
      background-image: var(--linkedinWhite);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 210px;
      left: 0px;
    }
  }

  #instagramImgBlack {
    background-color: red;
    &:before {
      content: "";
      background-image: var(--instagramBlack);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 140px;
      left: 0px;
    }
  }

  #instagramImgWhite {
    background-color: green;
    &:before {
      content: "";
      background-image: var(--instagramWhite);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 140px;
      left: 0px;
    }
  }

  #twitterImgBlack {
    background-color: red;
    font-size: 1rem;
    &:before {
      content: "";
      background-image: var(--twitterBlack);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 70px;
      left: 0px;
    }
  }

  #twitterImgWhite {
    background-color: green;
    &:before {
      content: "";
      background-image: var(--twitterWhite);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 70px;
      left: 0px;
    }
  }

  #emailImgBlack {
    background-color: red;
    &:before {
      content: "";
      background-image: var(--emailBlack);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
  }

  #emailImgWhite {
    background-color: green;
    &:before {
      content: "";
      background-image: var(--emailWhite);
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
  } */

  &:hover {
    text-shadow: 0 0 1px var(--text-primary);
  }

  @media only screen and (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
`;

// export const RightContainer = styled.div`
//   transform: rotate(90deg);
//   width: 5rem;
//   position: fixed;
//   right: 0;
//   top: 45%;
//   border: none;
// `;

export const LeftContainer = styled.div`
  /* transform: rotate(270deg); */
  align-items: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 10px;
  bottom: 30%;
  border: none;
`;

// export const VerticalLinks = styled.div`
//   text-align: center;
//   border: none;

//   a {
//     text-decoration: none;
//     border: none;
//     padding: 1rem;
//     letter-spacing: 4px;
//   }

//   @media only screen and (max-width: 800px) {
//     display: none;
//     visibility: hidden;
//   }
// `;

export const VerticalLink = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 1rem;
  letter-spacing: 4px;
  cursor: pointer;
`;

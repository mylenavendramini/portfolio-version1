import {
  VerticalContainer,
  LeftContainer,
  RightContainer,
  VerticalLinks,
  VerticalLink,
  TestLink,
  LinkedinLink,
} from "./vertical.styles";

const Vertical = () => {
  return (
    <VerticalContainer>
      {/*<RightContainer>
        <VerticalLinks>
 
          <VerticalLink to="projects" spy={true} smooth={true}>
            PROJECTS
          </VerticalLink>
         
        </VerticalLinks>
  </RightContainer>*/}
      <LeftContainer>
        <TestLink
          href="https://github.com/mylenavendramini"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-github-white.png" alt="" />
          <img className="lighttheme" src="icons8-github-black.png" alt="" />
        </TestLink>

        <TestLink
          href="https://www.linkedin.com/in/mylenavendramini/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-linkedin-white.png" alt="" />
          <img className="lighttheme" src="icons8-linkedin-black.png" alt="" />
        </TestLink>

        <TestLink
          href="https://www.instagram.com/viajamylena/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-instagram-white.png" alt="" />
          <img className="lighttheme" src="icons8-instagram-black.png" alt="" />
        </TestLink>

        <TestLink
          href="https://twitter.com/mmvendramini"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-twitter-white.png" alt="" />
          <img className="lighttheme" src="icons8-twitter-black.png" alt="" />
        </TestLink>

        <TestLink
          href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-email-white.png" alt="" />
          <img className="lighttheme" src="icons8-email-black.png" alt="" />
        </TestLink>
      </LeftContainer>
    </VerticalContainer>
  );
};

export default Vertical;

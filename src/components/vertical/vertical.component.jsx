import {
  VerticalContainer,
  LeftContainer,
  RightContainer,
  VerticalLinks,
  VerticalLink,
  LinkedinLink,
} from "./vertical.styles";

const Vertical = () => {
  return (
    <VerticalContainer>
      <RightContainer>
        <VerticalLinks>
          <a href="/about">ABOUT</a>
          <VerticalLink to="projects" spy={true} smooth={true}>
            PROJECTS
          </VerticalLink>
        </VerticalLinks>
      </RightContainer>

      <LeftContainer>
        <VerticalLinks>
          <a href="mailto:myvendramini@gmail.com?subject=travelwithme">
            myvendramini@gmail.com
          </a>
        </VerticalLinks>
      </LeftContainer>

      <LinkedinLink
        href="https://www.linkedin.com/in/mylena-vendramini-0ba475229/"
        target="_blank"
      >
        in
      </LinkedinLink>
    </VerticalContainer>
  );
};

export default Vertical;

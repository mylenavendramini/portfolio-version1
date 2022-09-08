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
      <LinkedinLink to="/">in</LinkedinLink>
    </VerticalContainer>
  );
};

export default Vertical;

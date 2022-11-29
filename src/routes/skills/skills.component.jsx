import {
  SkillsContainer,
  SkillsGrid,
  FooterContainer,
  LinkedinLink,
  ScrollDown,
} from "./skills.styles";
import { FadeIn5Div, FadeIn10Div, PulseDiv } from "../../animation";

import { Fragment } from "react";

const Skills = () => {
  return (
    <Fragment>
      <SkillsContainer>
        <FadeIn5Div>
          <PulseDiv>
            {" "}
            <h4>Main Skills</h4>
            <SkillsGrid>
              <div>
                <h5>&#10143; Frontend</h5>
                <h5>&#10143; UX/UI</h5>
                <h5>&#10143; JavaScript (ES6+)</h5>
              </div>
              <div>
                <h5>&#10143; HTML</h5>
                <h5>&#10143; CSS</h5>
                <h5>&#10143; React</h5>
              </div>
              <div>
                <h5>&#10143; Node.js</h5>
                <h5>&#10143; TypeScript</h5>
                <h5>&#10143; Figma</h5>
              </div>
            </SkillsGrid>
          </PulseDiv>
        </FadeIn5Div>

        <FadeIn5Div>
          <PulseDiv>
            <h4>Languages I speak fluent:</h4>
            <SkillsGrid>
              <h5>&#10143; en-US English </h5>
              <h5>&#10143; es-ES Español </h5>
              <h5>&#10143; pt-BR Português</h5>
            </SkillsGrid>
          </PulseDiv>
        </FadeIn5Div>
      </SkillsContainer>

      <FooterContainer>
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          myvendramini@gmail.com
        </a>
      </FooterContainer>
    </Fragment>
  );
};

export default Skills;

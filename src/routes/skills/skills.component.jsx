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
      <SkillsContainer data-aos={"fade-up"} data-aos-duration={"3000"}>
        <h4>Main Skills:</h4>
        <SkillsGrid>
          <div>
            <h5 class="smallerImg">
              <img
                className="darktheme"
                src="icons8-javascript-white.png"
                alt="JS"
              />
              <img
                className="lighttheme"
                src="icons8-javascript-black.png"
                alt="JS"
              />
              JavaScript
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-typescript-white.png"
                alt="typescript"
              />
              <img
                className="lighttheme"
                src="icons8-typescript-black.png"
                alt="typescript"
              />
              TypeScript
            </h5>
            <h5>
              <img
                className="darktheme"
                src="icons8-react-white.png"
                alt="React"
              />
              <img
                className="lighttheme"
                src="icons8-react-black.png"
                alt="React"
              />
              React
            </h5>
          </div>
          <div>
            <h5>
              <img
                className="darktheme"
                src="icons8-html-white.png"
                alt="HTML"
              />
              <img
                className="lighttheme"
                src="icons8-html-black.png"
                alt="HTML"
              />
              HTML
            </h5>
            <h5>
              <img
                className="darktheme"
                src="icons8-css3-white.png"
                alt="CSS"
              />
              <img
                className="lighttheme"
                src="icons8-css3-black.png"
                alt="CSS"
              />
              CSS
            </h5>
            <h5>
              <img
                className="darktheme"
                src="icons8-node-js-white.png"
                alt="node-js"
              />
              <img
                className="lighttheme"
                src="icons8-node-js-black.png"
                alt="node-js"
              />
              Node.js
            </h5>
          </div>
          <div>
            <h5 className="smallerImg">
              <img className="darktheme" src="icons8-git-white.png" alt="git" />
              <img
                className="lighttheme"
                src="icons8-git-black.png"
                alt="git"
              />
              Git
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-figma-white.png"
                alt="figma"
              />
              <img
                className="lighttheme"
                src="icons8-figma-black.png"
                alt="figma"
              />
              Figma
            </h5>
            <h5> UX/UI</h5>
          </div>
        </SkillsGrid>

        <h4>Languages I speak fluent:</h4>
        <SkillsGrid>
          <h5>&#10143; en-US English </h5>
          <h5>&#10143; es-ES Español </h5>
          <h5>&#10143; pt-BR Português</h5>
        </SkillsGrid>
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

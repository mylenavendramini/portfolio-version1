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
        <SkillsGrid id="center">
          <div>
            <h5 className="smallerImg">
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
            <h5>
              Next.js
            </h5>
            <h5>
              <img
                className="darktheme"
                src="icons8-angular-white.png"
                alt="angular"
              />
              <img
                className="lighttheme"
                src="icons8-angular-black.png"
                alt="angular"
              />
              Angular
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-redux-white.png"
                alt="redux"
              />
              <img
                className="lighttheme"
                src="icons8-redux-black.png"
                alt="redux"
              />
              Redux
            </h5>
          </div>
          <div>

            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-nodejs-white.png"
                alt="JS"
              />
              <img
                className="lighttheme"
                src="icons8-nodejs-black.png"
                alt="JS"
              />
              Node.js
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-express-white.png"
                alt="express"
              />
              <img
                className="lighttheme"
                src="icons8-express-black.png"
                alt="express"
              />
              Express
            </h5>
            <h5>
              Koa
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-postgresql-white.png"
                alt="postgresql"
              />
              <img
                className="lighttheme"
                src="icons8-postgresql-black.png"
                alt="postgresql"
              />
              PostgreSQL
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-mysql-white.png"
                alt="mysql"
              />
              <img
                className="lighttheme"
                src="icons8-mysql-black.png"
                alt="mysql"
              />
              MySQL
            </h5>
            <h5 className="smallerImg">
              Sequelize
            </h5>
          </div>
          <div>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-mongodb-white.png"
                alt="mongodb"
              />
              <img
                className="lighttheme"
                src="icons8-mongodb-black.png"
                alt="mongodb"
              />
              MongoDB
            </h5>
            <h5 className="smallerImg">
              Mongoose
            </h5>
            <h5 className="smallerImg">
              <img
                className="darktheme"
                src="icons8-jest-white.png"
                alt="jest"
              />
              <img
                className="lighttheme"
                src="icons8-jest-black.png"
                alt="jest"
              />
              Jest
            </h5>
            <h5 className="smallerImg">
              Cypress
            </h5>
            <h5 className="smallerImg">
              <img className="darktheme" src="icons8-git-white.png" alt="git" />
              <img
                className="lighttheme"
                src="icons8-git-black.png"
                alt="git"
              />
              Git
            </h5>
            <h5>
              Cloudinary
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

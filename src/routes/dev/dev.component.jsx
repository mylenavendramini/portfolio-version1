import {
  DevContact,
  DevContainer,
  FreelanceGrid,
  FreelanceImage,
} from "./dev.styles";
import Footer from "../footer/footer.component";
import Skills from "../skills/skills.component";
import ProjectsDev from "../../components/projects/projects-dev.component";

import Vertical from "../../components/vertical/vertical.component";
import { Fragment } from "react";
import Contact from "../../components/contact/contact.component";

const Dev = () => {
  return (
    <Fragment>
      <Vertical />
      <DevContainer data-aos={"fade-up"} data-aos-duration={"1000"}>
        <h4>Projects and skills:</h4>
        <h1>
          As a Front-End Developer, I have built{" "}
          <a href="#projects">several projects</a>, where I developed my{" "}
          <a href="#skills">skills</a> mainly in HTML, CSS, JavaScript, React
          and TypeScript.
        </h1>

        <h1>
          My background in Law made me acquire skills such as collaboration,
          teamwork, communication and the ability to absorb and interpret
          complex information and reach a well-crafted conclusion.
        </h1>
        <br />
        <h1>
          &#10143; Click{" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to take a look at my CV.
        </h1>
        <h1>
          &#10143; Check my{" "}
          <a href="/blog" rel="noreferrer">
            blog
          </a>{" "}
          before you go!
        </h1>

        <div id="skills">
          {" "}
          <Skills />
        </div>

        <div id="projects">
          {" "}
          <ProjectsDev />
        </div>

        <DevContact>
          <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
            Do you have any questions or would you like to talk about work?
          </h4>
          <Contact />
          {/*<h5 data-aos={"fade-up"} data-aos-duration={"1000"}>
            Please, send me an e-mail at{" "}
            <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
              myvendramini@gmail.com
            </a>
            .
  </h5>*/}
        </DevContact>
        <Footer />
      </DevContainer>
    </Fragment>
  );
};

export default Dev;

import {
  DevContact,
  DevContainer,
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
        <h4>Projects</h4>

        <h3>
          &#10143; You can click {" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to see my CV.
        </h3>
        <h3>
          I have experience building full stack and frontend applications with creativity and professionalism.
          Please, check out some of my main projects!
        </h3>
        {/*<h1>
          &#10143; Check my{" "}
          <a href="/blog" rel="noreferrer">
            blog
          </a>{" "}
          before you go!
  </h1>

        <div id="skills">
          {" "}
          <Skills />
        </div>*/}

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

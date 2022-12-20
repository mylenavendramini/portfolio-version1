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

const Dev = () => {
  return (
    <Fragment>
      <Vertical />
      <DevContainer data-aos={"fade-up"} data-aos-duration={"1000"}>
        <h1>
          Ever since I started studying programming, I knew this was what I had
          to do. I have already built several projects, where I developed my
          skills in HTML, CSS, JavaScript, React and TypeScript.
        </h1>

        <h1>
          My background in law made me acquire skills such as collaboration,
          teamwork, communication and the ability to absorb and interpret
          complex information and reach a well-crafted conclusion.
        </h1>

        <h1>
          Click{" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to take a look at my CV.
        </h1>

        <Skills />
        <ProjectsDev />
        <DevContact>
          <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
            Do you have any questions or would you like to talk about work?
          </h4>
          <h5 data-aos={"fade-up"} data-aos-duration={"1000"}>
            Please, send me an e-mail at{" "}
            <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
              myvendramini@gmail.com
            </a>
            .
          </h5>
        </DevContact>
        <Footer />
      </DevContainer>
    </Fragment>
  );
};

export default Dev;

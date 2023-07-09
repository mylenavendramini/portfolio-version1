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
          I am an experienced Full Stack Software Engineer proficient in a variety of technologies.
        </h1>
        <h1>
          My skills include JavaScript, React, TypeScript, Next.js, Redux, Node.js, Express, Koa, MongoDB, Mongoose, PostgreSQL, MySQL, Sequelize, HTML, CSS, and more.
        </h1>
        <h1>
          Additionally, I am skilled in Angular, Axios, Jest, Cypress, Socket.IO, Cloudinary, TailwindCSS, Ant Design, and MUI components.
        </h1>
        <br />
        <h1>
          &#10143; Click{" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to take a look at my CV.
        </h1>
        {/*<h1>
          &#10143; Check my{" "}
          <a href="/blog" rel="noreferrer">
            blog
          </a>{" "}
          before you go!
  </h1>*/}

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

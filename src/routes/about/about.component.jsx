import { AboutContainer, AboutGrid, FooterContainer } from "./about.styles";

import { Fragment } from "react";
import Vertical from "../../components/vertical/vertical.component";

import { Link } from "react-router-dom";
import Contact from "../../components/contact/contact.component";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <Vertical />
      <AboutContainer>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          About me
        </h4>
        <AboutGrid>
          <h3
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"100"}
          >
            My name is Mylena Vendramini and I am a{" "}
            <Link onClick={scrollToTop} to="/dev">
              Software Engineer
            </Link>
            .
            <br />
            <br />
            I am italian and brazilian, based in London.
            <br />
            <br />I graduated in Law and worked in the field for a few years, when I have developed skills in collaboration, teamwork, and effective communication. Transferring these skills to web development, I create engaging online experiences that deliver tangible results.
            <br />
            <br />
            Since I discovered my <i>passion for coding</i>, I've
            specialized in JavaScript, React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, MySQL and more.
            <br />
            <br />
            I have the privilege of being part of a collaborative team at DocCare, a private healthcare platform, working as a Full Stack Software Engineer.
            <br />
            <br />
            I also manage and oversee the webpage for Toda Cidadã, an NGO dedicated to promoting debates about politics, economics, and constitutional rights.
            <br />
            <br />
            In my free time, I love to travel (I was a digital nomad for a year
            🛫), writing (sometimes I like to write fictional stories 📝) and a
            good coffee (always ☕️).
          </h3>
          <img
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"100"}
            src="/profile-picture.png"
            alt="profilePicture"
          />
        </AboutGrid>

        {/*<p data-aos={"fade-up"} data-aos-duration={"1000"}>
          Please, send me an e-mail at{" "}
          <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
            myvendramini@gmail.com
          </a>
          .
            </p>*/}
        <br />
        <h4 id="contact">
          Do you have any questions or would you like to talk about work?
        </h4>
        <Contact />
      </AboutContainer>

      <FooterContainer>
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          myvendramini@gmail.com
        </a>
      </FooterContainer>
    </Fragment>
  );
};

export default About;

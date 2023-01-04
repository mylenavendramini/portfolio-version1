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
        {/*<FadeIn5Div>
          <PulseDiv>
            {" "}
            <h2>I'm Mylena Vendramini, a </h2>
            <Gray>front-end developer</Gray>
            <h2>
              , driven by challenging work and truly passionate about what I do.
            </h2>
          </PulseDiv>
  </FadeIn5Div>*/}
        {/*
        <h1
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={"500"}
        >
          Click{" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          to take a look at my CV.
</h1>*/}

        {/*<h6
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={"500"}
        >
          <LinkedinLink
            href="https://www.linkedin.com/in/mylenavendramini/"
            target="_blank"
            rel="noreferrer"
          >
            in
          </LinkedinLink>
  </h6>
        <FadeIn10Div>
          <ScrollDown to="aboutme" spy={true} smooth={true}>
            <h6>Scroll down &#8675;</h6>
          </ScrollDown>
        </FadeIn10Div>*/}

        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          About me:
        </h4>
        <AboutGrid>
          <h5
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={"100"}
          >
            My name is Mylena Vendramini and I am a{" "}
            <Link onClick={scrollToTop} to="/dev">
              Front-End developer
            </Link>
            .
            <br />
            <br />
            I am italian and brazilian, based in London and eligible to live and
            work in UK/EU.
            <br />
            <br />I graduated in Law in the year 2017 and after a few years
            working in the field, I understood that I had to work with something
            I <i>truly love</i>
            .
            <br />
            <br />
            That's when I discovered my passion for coding and since 2021, I've
            specialized in JavaScript and made some websites for fun. After a
            few months, I had the opportunity to start working with an NGO that
            aims to promote debates about politics, economics and constitutional
            rights.
            <br />
            <br />
            At the same time, I started to learn React and TypeScript, which I
            use in almost all my websites today. I really love what I do.
            <br /> <br />
            In my free time, I love to travel (I was a digital nomad for a year
            🛫), writing (sometimes I like to write fictional stories 📝) and a
            good coffee (always ☕️).
          </h5>
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

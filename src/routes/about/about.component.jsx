import {
  AboutContainer,
  Gray,
  AboutGrid,
  NavBarContainer,
  Logo,
  FooterContainer,
  LinkedinLink,
  ScrollDown,
} from "./about.styles";

import { FadeIn5Div, FadeIn10Div, PulseDiv } from "../../animation";

import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <AboutContainer>
        <FadeIn5Div>
          <PulseDiv>
            {" "}
            <h2>I'm Mylena Vendramini, a </h2>
            <Gray>front-end developer</Gray>
            <h2>
              , driven by challenging work and truly passionate about what I do.
            </h2>
          </PulseDiv>
        </FadeIn5Div>

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
        </h1>

        <h6
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
        </FadeIn10Div>
        <p id="aboutme"> </p>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          A little more about me:
        </h4>
        <h5
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"100"}
        >
          I'm from Brazil, currently based in London.
          <br />
          <br />I graduated in Law in the year 2017 and after a few years
          working in the field, I understood that I had to work with something I{" "}
          <i>truly love</i>
          .
          <br />
          <br />
          That's when I discovered my passion for coding and since then, I've
          specialized in JavaScript and made some websites for fun. After a few
          months, I had the opportunity to start working with an NGO that aims
          to promote debates about politics, economics and constitutional
          rights.
          <br />
          <br />
          At the same time, I started to learn React, which I use in almost all
          my websites today. I'm currently developing my TypeScript skills and
          making some cool websites as a freelancer. I really love what I do.
          <br /> <br />
          In my free time, I love to travel (I was a digital nomad for a year
          🛫), writing (sometimes I like to write fictional stories 📝) and a
          good coffee (always ☕️).
        </h5>

        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          Do you have any questions or would you like to talk about work?
        </h4>
        <p data-aos={"fade-up"} data-aos-duration={"1000"}>
          Please, send me an e-mail at{" "}
          <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
            myvendramini@gmail.com
          </a>
          .
        </p>
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

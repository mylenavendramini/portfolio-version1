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
      <NavBarContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
      </NavBarContainer>

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
          Click <a href="/cv">here</a> to take a look at my CV.
        </h1>
        <h6
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={"500"}
        >
          <LinkedinLink
            href="https://www.linkedin.com/in/mylena-vendramini-0ba475229/"
            target="_blank"
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
          <br />I graduated in Law in the year 2017 and after four years working
          in the field, I understood that I had to work with something I{" "}
          <i>truly love</i>
          .
          <br />
          That's when I discovered my passion for coding and creating custom
          websites.
          <br /> I'm also passionate about travelling, writing and a good
          coffee.
        </h5>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          TESTE!! Take a look at my main skills:
        </h4>
        <AboutGrid
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"100"}
        >
          <div>
            <h5>&#10143; Frontend</h5>
            <h5>&#10143; UX/UI</h5>
          </div>
          <div>
            <h5>&#10143; JavaScript (ES6+)</h5>
            <h5>&#10143; HTML</h5>
            <h5>&#10143; CSS</h5>
            <h5>&#10143; React</h5>
          </div>
          <div>
            <h5>&#10143; Node.js</h5>
            <h5>&#10143; Handlebars.js</h5>
          </div>
          <div>
            <h5>&#10143; TypeScript</h5>
            <h5>&#10143; MongoDB</h5>
            <h5>&#10143; Figma</h5>
          </div>
        </AboutGrid>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          Languages I speak fluent:
        </h4>
        <AboutGrid
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          data-aos-delay={"100"}
        >
          <h5>&#10143; en-US English </h5>
          <h5>&#10143; es-ES Español </h5>
          <h5>&#10143; pt-BR Português</h5>
        </AboutGrid>
        <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
          Interested in working with me?
        </h4>
        <p data-aos={"fade-up"} data-aos-duration={"1000"}>
          You can e-mail me at{" "}
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

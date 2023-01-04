import {
  PresentationContainer,
  Gradient,
  SubpageContainer,
  SubpageGrid,
  SubpageImage,
  ContactContainer,
} from "./presentation.styles";

import {
  FadeInDiv,
  FadeIn5Div,
  FadeIn8Div,
  FadeIn10Div,
  PulseDiv,
} from "../../animation";
import { Link } from "react-router-dom";
import Contact from "../contact/contact.component";
import { Fragment } from "react";
const Presentation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <PresentationContainer>
        <FadeInDiv>
          <h3>
            Hi! My name is <strong>Mylena Vendramini</strong> and I am a
          </h3>
        </FadeInDiv>
        {/*<FadeIn5Div>
        {" "}
        <h2>MYLENA VENDRAMINI.</h2>
      </FadeIn5Div>

      <FadeIn8Div>
        {" "}
        <h3>I'm a</h3>
  </FadeIn8Div>*/}
        <FadeInDiv>
          <PulseDiv>
            {" "}
            <Gradient>FRONT-END DEVELOPER</Gradient>
            {/*<h6>FRONT-END DEVELOPER</h6>*/}
          </PulseDiv>
        </FadeInDiv>
        <FadeInDiv>
          {" "}
          <h5>
            based in London and passionate about building digital experiences.
          </h5>
        </FadeInDiv>
        <SubpageContainer>
          <h1 id="central">What do you need today?</h1>
          <FadeIn5Div>
            <SubpageGrid>
              <Link onClick={scrollToTop} to="/websites">
                <SubpageImage>
                  <h2>I need a website</h2>
                </SubpageImage>
              </Link>

              <Link onClick={scrollToTop} to="/dev">
                <SubpageImage>
                  <h2>I need a dev</h2>
                </SubpageImage>
              </Link>

              {/*<SubpageImage data-aos={"zoom-in-up"} data-aos-duration={"3000"}>
        <Link onClick={scrollToTop} to="/viajamylena">
          <h2>I talk about travelling</h2>
        </Link>
</SubpageImage>*/}
            </SubpageGrid>
          </FadeIn5Div>
        </SubpageContainer>
      </PresentationContainer>
      <ContactContainer>
        <Contact />
      </ContactContainer>
    </Fragment>
  );
};

export default Presentation;

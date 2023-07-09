import {
  PresentationContainer,
  Gradient,
  SubpageContainer,
  SubpageImage,
  ContactContainer,
  PresentationAnimation,
  PresentationMain
} from "./presentation.styles";
import {
  FadeIn5Div,
  FadeInDiv,
} from "../../animation";
import { Link } from "react-router-dom";
import Contact from "../contact/contact.component";
import { Fragment } from "react";
import { scrollToTop } from "../../helper";
const Presentation = () => {
  return (
    <Fragment>
      <PresentationContainer>
        <PresentationMain>
          <FadeInDiv>
            <h2>
              Mylena Vendramini
            </h2>
            <Gradient>SOFTWARE ENGINEER</Gradient>
            <h3>
              Building digital exeriences for the web.
            </h3>
          </FadeInDiv>
          <SubpageContainer>
            <FadeIn5Div>
              <Link onClick={() => scrollToTop()} to="/dev">
                <SubpageImage>
                  <h2>Projects</h2>
                </SubpageImage>
              </Link>
            </FadeIn5Div>
          </SubpageContainer>
        </PresentationMain>
        <PresentationAnimation>
          <Link onClick={() => scrollToTop()} to="/dev"><lottie-player src="Programming.json" background="transparent" speed="0.5" loop autoplay>
          </lottie-player></Link></PresentationAnimation>
      </PresentationContainer>
      <ContactContainer>
        <Contact />
      </ContactContainer>
    </Fragment>
  );
};

export default Presentation;

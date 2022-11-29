import { PresentationContainer, Gradient } from "./presentation.styles";

import {
  FadeInDiv,
  FadeIn5Div,
  FadeIn8Div,
  FadeIn10Div,
  PulseDiv,
} from "../../animation";

const Presentation = () => {
  return (
    <PresentationContainer>
      <FadeInDiv>
        <h3>Hi, my name is</h3>
      </FadeInDiv>
      <FadeIn5Div>
        {" "}
        <h2>MYLENA VENDRAMINI.</h2>
      </FadeIn5Div>

      <FadeIn8Div>
        {" "}
        <h3>I'm a</h3>
      </FadeIn8Div>
      <PulseDiv>
        {" "}
        <Gradient>FRONT-END DEVELOPER</Gradient>
        <h6>FRONT-END DEVELOPER</h6>
      </PulseDiv>
      <FadeIn10Div>
        {" "}
        <h5>
          based in London and passionate about building digital experiences.
        </h5>
      </FadeIn10Div>
    </PresentationContainer>
  );
};

export default Presentation;

import { SubpageContainer, SubpageGrid, SubpageImage } from "./subpage.styles";
import { Link } from "react-router-dom";

import { FadeInDiv } from "../../animation";

const Subpage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <SubpageContainer>
      <FadeInDiv>
        <SubpageGrid>
          <SubpageImage>
            <Link onClick={scrollToTop} to="/websites">
              <h2>I create websites</h2>
            </Link>
          </SubpageImage>
          <SubpageImage>
            <Link onClick={scrollToTop} to="/dev">
              <h2>I'm a dev</h2>
            </Link>
          </SubpageImage>
          {/*<SubpageImage data-aos={"zoom-in-up"} data-aos-duration={"3000"}>
          <Link onClick={scrollToTop} to="/viajamylena">
            <h2>I talk about travelling</h2>
          </Link>
  </SubpageImage>*/}
        </SubpageGrid>
      </FadeInDiv>
    </SubpageContainer>
  );
};

export default Subpage;

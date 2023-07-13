import { SubpageContainer, SubpageGrid, SubpageImage } from "./subpage.styles";
import { Link } from "react-router-dom";
import { FadeInDiv } from "../../animation";
import { scrollToTop } from "../../helper";

const Subpage = () => {
  return (
    <SubpageContainer>
      <FadeInDiv>
        <SubpageGrid>
          <SubpageImage>
            <Link onClick={() => scrollToTop()} to="/websites">
              <h2>I create websites</h2>
            </Link>
          </SubpageImage>
          <SubpageImage>
            <Link onClick={() => scrollToTop()} to="/dev">
              <h2>I'm a dev</h2>
            </Link>
          </SubpageImage>
        </SubpageGrid>
      </FadeInDiv>
    </SubpageContainer>
  );
};

export default Subpage;

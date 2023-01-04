import { FreelanceContainer, Gradient, FreelanceNav } from "./freelance.styles";

import { PulseDiv } from "../../animation";
import Business from "../../components/business/business.component";

import ProjectsImages from "../../components/projects/projects-images.component";
import Contact from "../../components/contact/contact.component";

import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";
import Vertical from "../../components/vertical/vertical.component";

const Freelance = () => {
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <Vertical />
      <FreelanceContainer>
        <PulseDiv>
          <Gradient>Let's create your website</Gradient>
        </PulseDiv>

        <Business />

        <ProjectsImages />
        <Contact />
      </FreelanceContainer>
    </Fragment>
  );
};

export default Freelance;

import { FreelanceContainer, Gradient, FreelanceNav } from "./freelance.styles";
import {
  NavBarContainer,
  NavLinks,
  Logo,
  NavLink,
} from "../../components/navbar/navbar.styles";
import { PulseDiv } from "../../animation";
import Business from "../../components/business/business.component";

import Footer from "../../routes/footer/footer.component";
import Menu from "../../components/menu/menu.component";
import Burger from "../../components/burger/burger.component";

import ProjectsImages from "../../components/projects/projects-images.component";
import Contact from "../../components/contact/contact.component";
import { Link } from "react-router-dom";
import { useRef, useState, Fragment } from "react";
import { useOnClickOutside } from "../../hooks";
import NavBar from "../../components/navbar/navbar.component";

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

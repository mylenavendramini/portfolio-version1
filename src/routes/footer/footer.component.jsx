import { Fragment } from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  Logo,
  LinkedinLink,
} from "./footer.styles";

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <Logo>
          <a href="/">MV</a>
        </Logo>
        <FooterLinks>
          <a href="/about">About</a>
          <FooterLink to="projects" spy={true} smooth={true}>
            Projects
          </FooterLink>
          <FooterLink to="contact" spy={true} smooth={true}>
            Contact
          </FooterLink>
        </FooterLinks>
        <LinkedinLink
          href="https://www.linkedin.com/in/mylena-vendramini-frontenddeveloper/"
          target="_blank"
        >
          in
        </LinkedinLink>
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          myvendramini@gmail.com
        </a>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;

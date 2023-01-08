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
          href="https://github.com/mylenavendramini"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-github-white.png" alt="" />
          <img className="lighttheme" src="icons8-github-black.png" alt="" />
        </LinkedinLink>

        <LinkedinLink
          href="https://www.linkedin.com/in/mylenavendramini/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-linkedin-white.png" alt="" />
          <img className="lighttheme" src="icons8-linkedin-black.png" alt="" />
        </LinkedinLink>

        <LinkedinLink
          href="https://twitter.com/mmvendramini"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-twitter-white.png" alt="" />
          <img className="lighttheme" src="icons8-twitter-black.png" alt="" />
        </LinkedinLink>

        <LinkedinLink
          href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job"
          target="_blank"
          rel="noreferrer"
        >
          <img className="darktheme" src="icons8-email-white.png" alt="" />
          <img className="lighttheme" src="icons8-email-black.png" alt="" />
        </LinkedinLink>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;

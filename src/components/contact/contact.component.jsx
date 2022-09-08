import { ContactContainer, LinkedinLink } from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        Get in touch
      </h1>
      <h3 data-aos={"fade-up"} data-aos-duration={"900"}>
        You can e-mail me at{" "}
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          myvendramini@gmail.com
        </a>{" "}
        or follow me on{" "}
        <LinkedinLink
          href="https://www.linkedin.com/in/mylena-vendramini-0ba475229/"
          target="_blank"
        >
          Social Media
        </LinkedinLink>
        .
      </h3>
    </ContactContainer>
  );
};

export default Contact;

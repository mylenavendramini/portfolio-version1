import { ContactContainer } from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        Let's make your website!
      </h1>
      <h3 data-aos={"fade-up"} data-aos-duration={"900"}>
        Please, send me an e-mail at{" "}
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          myvendramini@gmail.com
        </a>
        .
      </h3>
    </ContactContainer>
  );
};

export default Contact;

import { ContactContainer, FormContainer } from "./contact.styles";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Keep in touch!</h2>
      <p>
        You can send an email directly to{" "}
        <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
          myvendramini@gmail.com
        </a>{" "}
        or fill the form below:{" "}
      </p>

      <FormContainer>
        <form
          action="https://formsubmit.co/myvendramini@gmail.com"
          method="POST"
          target="_blank"
        >
          <label htmlFor="name">
            <p>Name: </p>
          </label>
          <input type="text" name="name" required />
          <label htmlFor="email">
            <p>Email address: </p>
          </label>
          <input type="email" name="email" required />
          <label htmlFor="message" className="form__form-test">
            <p>Message:</p>
          </label>
          <textarea id="message" rows="4" name="message"></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

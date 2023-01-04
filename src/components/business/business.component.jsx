import { useState } from "react";
import { BusinessContainer, BusinessImage } from "./business.styles";

const Business = () => {
  const [firstToggle, setFirstToggle] = useState(true);
  const [secondToggle, setSecondToggle] = useState(false);
  const [thirdToggle, setThirdToggle] = useState(false);
  const firstClickHandler = () => {
    setFirstToggle((firstToggle) => !firstToggle);
  };
  const secondClickHandler = () => {
    setSecondToggle((secondToggle) => !secondToggle);
  };
  const thirdClickHandler = () => {
    setThirdToggle((thirdToggle) => !thirdToggle);
  };

  return (
    <BusinessContainer data-aos={"fade-up"} data-aos-duration={"2000"}>
      <BusinessImage
        onClick={firstClickHandler}
        style={{
          marginBottom: firstToggle ? "2rem" : "2rem",
        }}
      >
        <h1>What do I do?</h1>
      </BusinessImage>

      <h3
        style={{
          display: firstToggle ? "flex" : "none",
        }}
      >
        I create beautifully designed, easy-to-access websites that work on
        desktop, iPad, and mobile.
      </h3>
      <BusinessImage
        onClick={secondClickHandler}
        style={{
          marginBottom: secondToggle ? "2rem" : "2rem",
        }}
      >
        <h1>How do I work?</h1>
      </BusinessImage>

      <h3
        style={{
          display: secondToggle ? "flex" : "none",
        }}
      >
        &#10143; First let's have a conversation about what you want, initial
        ideas and expectations. What is the purpose of your website? What is
        your target audience? What message do you want to pass?
      </h3>
      <h3
        style={{
          display: secondToggle ? "flex" : "none",
        }}
      >
        &#10143; Afterwards, I put together a project proposal based on our
        conversation and send it to you for approval.
      </h3>
      <h3
        style={{
          display: secondToggle ? "flex" : "none",
        }}
      >
        &#10143; Don't worry, during the website creation process, we'll keep in
        touch and I will keep you updated on each step.
      </h3>
      <h3
        style={{
          display: secondToggle ? "flex" : "none",
        }}
      >
        &#10143; After final approval of the project, you will have a customized
        website.
      </h3>

      <BusinessImage
        onClick={thirdClickHandler}
        style={{
          marginBottom: thirdToggle ? "2rem" : "2rem",
        }}
      >
        <h1> Why should you have a website?</h1>
      </BusinessImage>

      <h3
        style={{
          display: thirdToggle ? "flex" : "none",
        }}
      >
        <strong>Greater credibility:</strong>{" "}
      </h3>
      <h3
        style={{
          display: thirdToggle ? "flex" : "none",
        }}
      >
        Most consumers believe that a business with a presence on the Web
        demonstrates greater professionalism than just a presence on social
        media.
      </h3>
      <h3
        style={{
          display: thirdToggle ? "flex" : "none",
        }}
      >
        <strong>More space:</strong>{" "}
      </h3>
      <h3
        style={{
          display: thirdToggle ? "flex" : "none",
        }}
      >
        You will have a website of your own, with space to put more information
        about your work, projects and testimonials from other clients.
      </h3>
      <h3
        style={{
          display: thirdToggle ? "flex" : "none",
        }}
      >
        <strong> Greater visibility:</strong>{" "}
      </h3>
      <h3
        style={{
          display: thirdToggle ? "flex" : "none",
        }}
      >
        {" "}
        People will find you when searching for your business on Google.
      </h3>
    </BusinessContainer>
  );
};

export default Business;

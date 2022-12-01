import { BusinessContainer } from "./business.styles";

import PopupThisAuthor from "../popup/popup-thisauthor.component";
import PopupTodaCidada from "../popup/popup-todacidada.component";
import PopupTravelWithMe from "../popup/popup-travelwithme.component";
import PopupNutritionist from "../popup/popup-nutritionist.component";

const Business = () => {
  return (
    <BusinessContainer>
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        What do I do?
      </h1>
      <h3 data-aos={"fade-up"} data-aos-duration={"900"}>
        I create beautifully designed, easy-to-access websites that work on
        desktop, iPad, and mobile.
      </h3>

      <h1 data-aos={"fade-up"} data-aos-duration={"3000"} id="reason">
        How do I work?
      </h1>

      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        &#10143; First let's have a conversation about what you want, initial
        ideas and expectations. What is the purpose of your website? What is
        your target audience? What message do you want to pass?
      </h3>
      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        &#10143; Afterwards, I put together a project proposal based on our
        conversation and send it to you for approval.
      </h3>
      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        &#10143; Don't worry, during the website creation process, we'll keep in
        touch and I will keep you updated on each step.
      </h3>
      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        &#10143; After final approval of the project, you will have a customized
        website.
      </h3>
      <h1 data-aos={"fade-up"} data-aos-duration={"3000"} id="reason">
        Why have a website?
      </h1>
      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        <strong>Greater credibility:</strong> most consumers believe that a
        business with a presence on the Web demonstrates greater professionalism
        than just a presence on social media.
      </h3>
      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        <strong>More space:</strong> you will have a website of your own, with
        space to put more information about your work, projects and testimonials
        from other clients.
      </h3>
      <h3 data-aos={"fade-up"} data-aos-duration={"1800"}>
        <strong> Greater visibility:</strong> people will find you when
        searching for your business on Google.
      </h3>
    </BusinessContainer>
  );
};

export default Business;

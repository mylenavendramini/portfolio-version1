import {
  Modal,
  ModalContent,
  ModalClose,
  PopUpContent,
  ModalImage,
  WebsiteButton,
  Link,
} from "./popup.styles";

import { FadeInDiv } from "../../animation";

const PopupTravelWithMe = ({ close }) => (
  <div>
    <PopUpContent>
      <FadeInDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img
              src="https://i.ibb.co/MZ6Njy8/travelwithme-responsive.png"
              alt="travel-with-me"
            />
          </ModalImage>
          <ModalContent>
            <h3>Travel With Me</h3>
            <h2>
              Fully responsive and beautiful website of a travel organizer.
            </h2>
            <Link
              href="https://travelwithme-agency.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <WebsiteButton>View Website</WebsiteButton>
            </Link>
          </ModalContent>
        </Modal>
      </FadeInDiv>
    </PopUpContent>
  </div>
);

export default PopupTravelWithMe;

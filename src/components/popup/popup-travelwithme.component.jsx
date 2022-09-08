import {
  Modal,
  ModalContent,
  ModalClose,
  PopUpContent,
  ModalImage,
  WebsiteButton,
  Link,
} from "./popup.styles";

import { RubberBandDiv } from "../../animation";

const PopupTravelWithMe = ({ close }) => (
  <div>
    <PopUpContent>
      <RubberBandDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img
              src="https://i.ibb.co/jJvH71y/Screenshot-2022-08-25-at-19-00-30.png"
              alt="travel-with-me"
            />
          </ModalImage>
          <ModalContent>
            <h3>Travel With Me</h3>
            <h2>
              Website created because of my passion for travelling. You will
              find the services the client provides and testimonials from those
              who worked with him. Also, there’s a blog where he can talk about
              his experiences around the world.
            </h2>
            <Link href="https://travel-withme.herokuapp.com/" target="_blank">
              <WebsiteButton>View Website</WebsiteButton>
            </Link>
          </ModalContent>
        </Modal>
      </RubberBandDiv>
    </PopUpContent>
  </div>
);

export default PopupTravelWithMe;

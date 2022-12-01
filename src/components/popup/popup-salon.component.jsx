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

const PopupSalon = ({ close }) => (
  <div>
    <PopUpContent>
      <RubberBandDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img src="https://i.ibb.co/qx8L2CY/salon.png" alt="hairandbeauty" />
          </ModalImage>
          <ModalContent>
            <h3>Hair and Beauty</h3>
            <h2>
              Minimalist and responsive website of a hair and beauty salon.
            </h2>
            <Link
              href="https://juliaalbuquerque.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <WebsiteButton>View Website</WebsiteButton>
            </Link>
          </ModalContent>
        </Modal>
      </RubberBandDiv>
    </PopUpContent>
  </div>
);

export default PopupSalon;

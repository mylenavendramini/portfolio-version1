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

const PopupThisAuthor = ({ close }) => (
  <div>
    <PopUpContent>
      <RubberBandDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img
              src="https://i.ibb.co/7t90dW2/Screenshot-2022-08-25-at-18-59-20.png"
              alt="this-author"
            />
          </ModalImage>
          <ModalContent>
            <h3>This Author</h3>
            <h2>
              First site created by me from scratch where I used React JS and
              learned how relevant and brillant this library is. The client is a
              writer that exposes her books, biography and reviwes in an
              intuitive and visually pleasing website.
            </h2>
            <Link href="https://book-vendramini.herokuapp.com/" target="_blank">
              <WebsiteButton>View Website</WebsiteButton>
            </Link>
          </ModalContent>
        </Modal>
      </RubberBandDiv>
    </PopUpContent>
  </div>
);

export default PopupThisAuthor;

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
              src="https://i.ibb.co/z4c2nDz/Screenshot-2022-09-12-at-15-54-0.jpg"
              alt="this-author"
            />
          </ModalImage>
          <ModalContent>
            <h3>This Author</h3>
            <h2>
              First website I created using React JS and when I learned how
              relevant and brilliant this library is. The client is an author
              who exposes her books, biography and reviews on a website that
              represents the personality of the author.
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

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

const PopupThisAuthor = ({ close }) => (
  <div>
    <PopUpContent>
      <FadeInDiv>
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
              Exhibition of the author's books, biography and reviews on a
              website that really represents her personality.
            </h2>
            <Link
              href="https://this-author.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <WebsiteButton>View Website</WebsiteButton>
            </Link>
            <Link
              href="https://github.com/mylenavendramini/book-page"
              target="_blank"
              rel="noreferrer"
            >
              <WebsiteButton>View Code</WebsiteButton>
            </Link>
          </ModalContent>
        </Modal>
      </FadeInDiv>
    </PopUpContent>
  </div>
);

export default PopupThisAuthor;

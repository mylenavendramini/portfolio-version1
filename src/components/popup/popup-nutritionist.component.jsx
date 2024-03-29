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

const PopupNutritionist = ({ close }) => (
  <div>
    <PopUpContent>
      <FadeInDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img
              src="https://i.ibb.co/7bYN7PR/Design-sem-nome-1.png"
              alt="nutritionist"
            />
          </ModalImage>
          <ModalContent>
            <h3>Nutritionist</h3>
            <h2>
              Beautiful, intuitive and responsive website of a nutritionist.
            </h2>
            <Link
              href="https://lucianaferreira.netlify.app/"
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

export default PopupNutritionist;

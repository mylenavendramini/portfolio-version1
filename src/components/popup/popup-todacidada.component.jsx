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

const PopupTodaCidada = ({ close }) => (
  <div>
    <PopUpContent>
      <RubberBandDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img
              src="https://i.ibb.co/TLWbjqL/Screenshot-2022-09-12-at-15-48-5.jpg"
              alt="toda-cidada"
            />
          </ModalImage>
          <ModalContent>
            <h3>Toda Cidadã</h3>
            <h2>
              I’m responsible for the whole webpage of Toda Cidadã, an
              organization that aims to promote debates about politics,
              economics and constitutional rights. I’ve been working with them
              since january of 2022, where I learned to work with a client,
              understand his needs and transform his ideas into a intuitive and
              easily accessible website.
            </h2>
            <Link
              href="https://todacidada.com/"
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

export default PopupTodaCidada;

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

const PopupJSQuiz = ({ close }) => (
  <div>
    <PopUpContent>
      <FadeInDiv>
        <Modal>
          <ModalClose onClick={close}>&times;</ModalClose>
          <ModalImage>
            <img
              src="https://i.ibb.co/txMtqQX/Design-sem-nome.png"
              alt="jsquiz"
            />
          </ModalImage>
          <ModalContent>
            <h3>Javascript Quiz</h3>
            <h2>
              Javascript Quiz test to practice important JavaScript concepts.
            </h2>
            <Link
              href="https://javascript-quiz-mv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <WebsiteButton>View Website</WebsiteButton>
            </Link>
            <Link
              href="https://github.com/mylenavendramini/quiz-javascript"
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

export default PopupJSQuiz;

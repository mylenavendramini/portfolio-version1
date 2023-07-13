import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectImage,
  PopUpButtom,
  StyledPopup,
  Programs,
} from "./projects.styles";

import PopupThisAuthor from "../popup/popup-thisauthor.component";
import PopupTodaCidada from "../popup/popup-todacidada.component";
import PopupNutritionist from "../popup/popup-nutritionist.component";
import PopupSalon from "../popup/popup-salon.component";
import PopupJSQuiz from "../popup/popup-jsquiz.component";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        Come check some things I've built!
      </h1>
      <ProjectsGrid>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>Hair and Beauty</h3>
                <h2>
                  Minimalist and responsive website of a hair and beauty salon.
                </h2>
                <Programs>
                  <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupSalon close={close} />}
          </StyledPopup>
        </ProjectImage>

        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>JavaScript Quiz</h3>
                <h2>
                  Javascript Quiz test to practice important JavaScript
                  concepts.
                </h2>
                <Programs>
                  <h4>TYPESCRIPT</h4> <h4>REACT</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupJSQuiz close={close} />}
          </StyledPopup>
        </ProjectImage>

        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>Nutritionist</h3>
                <h2>
                  Beautiful, intuitive and responsive website of a nutritionist.
                </h2>
                <Programs>
                  <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupNutritionist close={close} />}
          </StyledPopup>
        </ProjectImage>


        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>This Author</h3>
                <h2>
                  Exhibition of the author's books, biography and reviews on a
                  website that really represents her personality.
                </h2>
                <Programs>
                  <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4> <h4>REACT</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupThisAuthor close={close} />}
          </StyledPopup>
        </ProjectImage>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>Toda Cidadã</h3>
                <h2>
                  An intuitive and easily accessible website of an NGO that aims
                  to promote debates about politics, economics and
                  constitutional rights.
                </h2>
                <Programs>
                  <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4> <h4>REACT</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupTodaCidada close={close} />}
          </StyledPopup>
        </ProjectImage>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

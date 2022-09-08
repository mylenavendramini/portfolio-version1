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
import PopupTravelWithMe from "../popup/popup-travelwithme.component";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        Come check some things I've built!
      </h1>
      <h1 id="projects">.</h1>
      <ProjectsGrid>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>Toda Cidadã</h3>
                <h2>
                  I’m the responsable for the whole webpage of Toda Cidadã, an
                  organization that aims to promote debates about politics,
                  economics and constitutional rights. I’ve been working with
                  them since january of 2022, where I learned to work with a
                  client, understand his needs and transform his ideas into a
                  intuitive and easily accessible website.
                </h2>
                <Programs>
                  <h4>JS</h4> <h4>HandleBars</h4> <h4>CSS</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupTodaCidada close={close} />}
          </StyledPopup>
        </ProjectImage>

        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>Travel With Me</h3>
                <h2>
                  Website created because of my passion for travelling. You will
                  find the services the client provides and testimonials from
                  those who worked with him. Also, there’s a blog where he can
                  talk about his experiences around the world.
                </h2>
                <Programs>
                  <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupTravelWithMe close={close} />}
          </StyledPopup>
        </ProjectImage>

        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <StyledPopup
            trigger={
              <PopUpButtom>
                <h3>This Author</h3>
                <h2>
                  First website I created using React JS and when I learned how
                  relevant and brilliant this library is. The client is an
                  author who exposes her books, biography and reviews on a
                  website that represents the personality of the author.
                </h2>
                <Programs>
                  <h4>REACT</h4>
                </Programs>
              </PopUpButtom>
            }
          >
            {(close) => <PopupThisAuthor close={close} />}
          </StyledPopup>
        </ProjectImage>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

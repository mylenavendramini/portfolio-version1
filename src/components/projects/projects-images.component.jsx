import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectImage,
  TextContainer,
  Button,
} from "./projects-images.styles";

const ProjectsImages = () => {
  return (
    <ProjectsContainer>
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        Come check some things I've built!
      </h1>

      <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"1000"}>
        <ProjectsGrid>
          <img
            src="https://i.ibb.co/F6yt3C3/bakery.png"
            alt="nutritionist"
            id="img-1"
          />
          <TextContainer>
            {" "}
            <h4>Sweet Treats Bakery</h4>
            <h2>Beautiful website for a bakery in London.</h2>
            <Button>
              <a
                href="https://sweet-treats-bakery.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p>See Website</p>
              </a>
            </Button>
          </TextContainer>
        </ProjectsGrid>
      </ProjectImage>

      <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"1000"}>
        <ProjectsGrid>
          <img
            src="https://i.ibb.co/qx8L2CY/salon.png"
            alt="hairandbeauty"
            id="img-2"
          />
          <TextContainer>
            <h4>Hair and Beauty</h4>
            <h2>Minimalist and responsive site of a hair and beauty salon.</h2>
            <Button>
              <a
                href="https://juliaalbuquerque.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p>See Website</p>
              </a>
            </Button>
          </TextContainer>
        </ProjectsGrid>
      </ProjectImage>

      <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"1000"}>
        <ProjectsGrid>
          <img
            src="https://i.ibb.co/5KBccMb/Design-sem-nome-1.png"
            alt="nutritionist"
            id="img-1"
          />
          <TextContainer>
            {" "}
            <h4>Nutritionist</h4>
            <h2>Beautiful, intuitive and responsive site of a nutritionist.</h2>
            <Button>
              <a
                href="https://lucianaferreira.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p>See Website</p>
              </a>
            </Button>
          </TextContainer>
        </ProjectsGrid>
      </ProjectImage>


    </ProjectsContainer>
  );
};

export default ProjectsImages;

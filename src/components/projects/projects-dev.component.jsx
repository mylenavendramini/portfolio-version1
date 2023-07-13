import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectImage,
  Button,
} from "./projects-dev.styles";
import { Programs } from "./projects.styles";

const ProjectsDev = () => {
  return (
    <ProjectsContainer>
      <ProjectsGrid>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>Wonderlist</h3>
          <h2>Full Stack Software Engineer</h2>
          <Programs>
            <h4>
              REACT
            </h4>
            <h4>
              NODE.JS
            </h4>
            <h4>
              MONGODB
            </h4>
            <h4>
              EXPRESS
            </h4>
          </Programs>
          <h2>
            Wonderlist is an application that empowers users to easily select and organize their trips.
          </h2>
          <h2>
            Users effortlessly create travel collections, adding cities and dates to create a personalized itinerary.
          </h2>
          <h2>
            With Wonderlist, users can plan activities for each day and keep track of the ones they've already enjoyed.
          </h2>
          <h2>
            They can discover the perfect spots for each city using an interactive map and categorize them for a well-organized journey.
          </h2>
          <Button>
            <a
              href="https://github.com/mylenavendramini/wonderlist"
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>TinPet</h3>
          <h2>Full Stack Software Engineer</h2>
          <Programs>
            <h4>
              TYPESCRIPT
            </h4>
            <h4>
              REACT
            </h4>
            <h4>
              NODE.JS
            </h4>
            <h4>
              POSTGRESQL
            </h4>
            <h4>
              SEQUELIZE
            </h4>
            <h4>
              JEST
            </h4>
          </Programs>
          <h2>
            TinPet is the app that connects dog owners with compatible canine companions, fostering joyful adventures and lifelong bonds.
          </h2>
          <h2>
            I played a pivotal role in a collaborative team, refactoring and modularising an online networking application, resulting in a 40% reduction in code complexity and a 35% enhancement in system performance.
          </h2>
          <Button>
            <a
              href=" Implemented unit testing using Jest, ensuring code quality and reliability with a 25% increase."
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>Custom Designer Portfolio</h3>
          <h2>Front End Software Engineer</h2>
          <Programs>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>
              REACT
            </h4>
            <h4>
              JS
            </h4>
            <h4>
              NODE.JS
            </h4>

          </Programs>
          <h2>
            Website showcasing the work of a custom designer's client.
          </h2>
          <h2>
            Employed responsive web design principles and attention to detail, delivering seamless user experiences.
          </h2>
          <Button>
            <a
              href="https://github.com/mylenavendramini/wonderlist"
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>This Author</h3>
          <h2>Front End Software Engineer</h2>
          <Programs>
            <h4>
              HTML
            </h4>
            <h4>
              JS
            </h4>
            <h4>
              CSS
            </h4>
            <h4>
              REACT
            </h4>
          </Programs>
          <h2>
            Exhibition of the author's books, biography and reviews on a website
            that really represents her personality.
          </h2>
          <h2>
            This was my first website using React. With this project, I put into
            practice everything I learned about components, hooks, roots and
            much more.
          </h2>
          <Button>
            <a
              href="https://this-author.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p>See Website</p>
            </a>

            <a
              href="https://github.com/mylenavendramini/book-page"
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>JavaScript Quiz</h3>
          <h2>Front End Software Engineer</h2>
          <Programs>
            <h4>
              REACT
            </h4>
            <h4>
              TYPESCRIPT
            </h4>
          </Programs>
          <h2>
            Thinking about how not to forget some important JavaScript concepts,
            I created this Javascript Quiz test, where anyone can practice their
            knowledge in a fun way.
          </h2>
          <Button>
            <a
              href="https://javascript-quiz-mv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p>See Website</p>
            </a>

            <a
              href="https://github.com/mylenavendramini/quiz-javascript"
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>
      </ProjectsGrid>

    </ProjectsContainer>
  );
};

export default ProjectsDev;

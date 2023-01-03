import Contact from "../contact/contact.component";
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectImage,
  TextContainer,
  Button,
} from "./projects-dev.styles";
import { Programs } from "./projects.styles";

const ProjectsDev = () => {
  return (
    <ProjectsContainer>
      <h1 data-aos={"fade-up"} data-aos-duration={"1000"}>
        These are some of my projects:
      </h1>
      <ProjectsGrid>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>This Author</h3>
          <Programs>
            <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4> <h4>REACT</h4>
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
          <Programs>
            <h4>REACT</h4> <h4>TYPESCRIPT</h4>
          </Programs>
          <h2>
            Thinking about how not to forget some important JavaScript concepts,
            I created this Javascript Quiz test, where anyone can practice their
            knowledge in a fun way.
          </h2>
          <h2>
            The site is in constant development, because I'm always feeding it with
            new questions. While I start my backend studies, my idea is to make
            the user use the application in an even better way in the future.
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
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>Gym App</h3>
          <Programs>
            <h4>REACT</h4> <h4>TYPESCRIPT</h4>
          </Programs>
          <h2>
            This is an app for anyone who wants a ready-made workout routine -
            with the ability to change weight, reps, and intervals - or who
            wants to create their own exercises. In the end, the user can print
            his workout and send to his email.
          </h2>
          <h2>
            React: I used tools like useParams, useState, useRef and routes
            (react-router-dom). TypeScript: I used interface and type. Also, I
            used emailJS, so the user can print his workout and send to his
            email.
          </h2>
          <Button>
            <a
              href="https://mygymworkoutapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p>See Website</p>
            </a>

            <a
              href="https://github.com/mylenavendramini/gym-app"
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>

        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>Toda Cidadã</h3>
          <Programs>
            <h4>HTML</h4> <h4>JS</h4> <h4>CSS</h4> <h4>REACT</h4>
          </Programs>
          <h2>
            I am responsible for the whole webpage of Toda Cidadã, an NGO that
            aims to promote debates about politics, economics and constitutional
            rights.
          </h2>
          <h2>
            The website is intuitive and easy to access and its design and
            maintenance is carried out in accordance with the agreement with my
            leader and my team.
          </h2>
          <Button>
            <a href="https://todacidada.com/" target="_blank" rel="noreferrer">
              <p>See Website</p>
            </a>

            <a
              href="https://github.com/mylenavendramini/todacidada-version2-react"
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

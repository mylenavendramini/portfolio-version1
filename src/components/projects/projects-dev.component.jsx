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
          <h3>DocCare</h3>
          <h2>Full Stack Software Engineer</h2>
          <Programs>

            <h4>

              NEXT.JS
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-redux-white.png"
                alt="redux"
              />
              <img
                className="lighttheme"
                src="icons8-redux-black.png"
                alt="redux"
              />

              REDUX
            </h4>

            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-mysql-white.png"
                alt="mysql"
              />
              <img
                className="lighttheme"
                src="icons8-mysql-black.png"
                alt="mysql"
              />
              MYSQL
            </h4>
            <h4 className="smallerImg2">
              {" "}

              SEQUELIZE
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-typescript-white.png"
                alt="typescript"
              />
              <img
                className="lighttheme"
                src="icons8-typescript-black.png"
                alt="typescript"
              />
              TYPESCRIPT
            </h4>

            <h4 className="smallerImg2">
              {" "}

              CYPRESS
            </h4>
            <h4 className="smallerImg2">
              {" "}

              CLOUDINARY
            </h4>
          </Programs>
          <h2>
            DocCare is a private healthcare platform, which prioritize the patients well-being and provide seamless access to quality medical care.
          </h2>
          <h2>
            I had the pleasure of collaborating with a talented team and developed both the client and server components, ensuring a seamless integration between frontend and backend.
          </h2>
          <h2>Designed and implemented the underlying API and data modeling, integrated third-party authentication and implemented comprehensive end-to-end testing using Cypress.</h2>
          <h2>Successfully planned and organised project tasks using Trello and incorporated Cloudinary to enhance the multimedia capabilities of the application.</h2>

          <Button>
            <a
              href="https://github.com/mylenavendramini/DocCareApp"
              target="_blank"
              rel="noreferrer"
            >
              <p>See code</p>
            </a>
          </Button>
        </ProjectImage>
        <ProjectImage data-aos={"zoom-in-up"} data-aos-duration={"2000"}>
          <h3>Wonderlist</h3>
          <h2>Full Stack Software Engineer</h2>
          <Programs>
            <h4>
              <img
                className="darktheme"
                src="icons8-react-white.png"
                alt="React"
              />
              <img
                className="lighttheme"
                src="icons8-react-black.png"
                alt="React"
              />
              REACT
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-nodejs-white.png"
                alt="nodejs"
              />
              <img
                className="lighttheme"
                src="icons8-nodejs-black.png"
                alt="nodejs"
              />
              NODE.JS
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-mongodb-white.png"
                alt="mongodb"
              />
              <img
                className="lighttheme"
                src="icons8-mongodb-black.png"
                alt="mongodb"
              />
              MONGODB
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-express-white.png"
                alt="express"
              />
              <img
                className="lighttheme"
                src="icons8-express-black.png"
                alt="express"
              />
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
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-typescript-white.png"
                alt="typescript"
              />
              <img
                className="lighttheme"
                src="icons8-typescript-black.png"
                alt="typescript"
              />
              TYPESCRIPT
            </h4>
            <h4>
              <img
                className="darktheme"
                src="icons8-react-white.png"
                alt="React"
              />
              <img
                className="lighttheme"
                src="icons8-react-black.png"
                alt="React"
              />
              REACT
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-nodejs-white.png"
                alt="nodejs"
              />
              <img
                className="lighttheme"
                src="icons8-nodejs-black.png"
                alt="nodejs"
              />
              NODE.JS
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-postgresql-white.png"
                alt="postgresql"
              />
              <img
                className="lighttheme"
                src="icons8-postgresql-black.png"
                alt="postgresql"
              />
              POSTGRESQL
            </h4>
            <h4 className="smallerImg2">
              {" "}

              SEQUELIZE
            </h4>
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-jest-white.png"
                alt="jest"
              />
              <img
                className="lighttheme"
                src="icons8-jest-black.png"
                alt="jest"
              />
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
          <h3>This Author</h3>
          <h2>Front End Software Engineer</h2>
          <Programs>
            <h4>
              {" "}
              <img
                className="darktheme"
                src="icons8-html-white.png"
                alt="HTML"
              />
              <img
                className="lighttheme"
                src="icons8-html-black.png"
                alt="HTML"
              />{" "}
              HTML{" "}
            </h4>{" "}
            <h4 className="smallerImg">
              {" "}
              <img
                className="darktheme "
                src="icons8-javascript-white.png"
                alt="JS"
              />
              <img
                className="lighttheme"
                src="icons8-javascript-black.png"
                alt="JS"
              />
              JS
            </h4>{" "}
            <h4>
              {" "}
              <img
                className="darktheme"
                src="icons8-css3-white.png"
                alt="CSS"
              />
              <img
                className="lighttheme"
                src="icons8-css3-black.png"
                alt="CSS"
              />
              CSS
            </h4>{" "}
            <h4>
              <img
                className="darktheme"
                src="icons8-react-white.png"
                alt="React"
              />
              <img
                className="lighttheme"
                src="icons8-react-black.png"
                alt="React"
              />
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
              {" "}
              <img
                className="darktheme"
                src="icons8-react-white.png"
                alt="React"
              />
              <img
                className="lighttheme"
                src="icons8-react-black.png"
                alt="React"
              />
              REACT
            </h4>{" "}
            <h4 className="smallerImg2">
              {" "}
              <img
                className="darktheme"
                src="icons8-typescript-white.png"
                alt="typescript"
              />
              <img
                className="lighttheme"
                src="icons8-typescript-black.png"
                alt="typescript"
              />
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

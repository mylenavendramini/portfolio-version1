import React, { Fragment, useState } from "react";
import {
  PostsContainer,
  AllPostsContainer,
  AllPostImage,
  Gradient,
  BlogDescrible,
} from "./posts.styles";

import { PulseDiv } from "../../animation";
import { DevContact } from "../../routes/dev/dev.styles";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { getTopics } from "../../posts.data";
import { scrollToTop } from "../../helper";

const DevPosts = () => {
  const topics = getTopics();


  const [firstToggle, setFirstToggle] = useState(true);
  const [secondToggle, setSecondToggle] = useState(false);

  const firstClickHandler = () => {
    setFirstToggle((firstToggle) => !firstToggle);
    setSecondToggle((secondToggle) => !secondToggle);
  };
  const secondClickHandler = () => {
    setSecondToggle((secondToggle) => !secondToggle);
    setFirstToggle((firstToggle) => !firstToggle);
  };

  return (
    <Fragment>
      <PostsContainer id="top">
        <PulseDiv>
          <Gradient>Let's talk about coding</Gradient>
        </PulseDiv>
        <div className="flex">
          <button onClick={firstClickHandler} className="desktopButton">
            All posts
          </button>
          <button className="responsiveButton">
            <a href="#allposts">All posts</a>
          </button>
          <button onClick={secondClickHandler} className="desktopButton">
            Search by category
          </button>
          <button className="responsiveButton">
            <a href="#categories">Search by category</a>
          </button>
        </div>
        <p id="allposts"></p>
        <AllPostsContainer
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          style={{
            display: firstToggle ? "grid" : "none",
          }}
        >
          {topics[0]?.map(({ title, id, imgUrl, body }) => (
            <AllPostImage key={id}>
              <Link to={`/blog/all/${id}`} onClick={() => scrollToTop()}>
                <img src={imgUrl} alt="post" />
              </Link>{" "}
              <Link to={`/blog/all/${id}`} onClick={() => scrollToTop()}>
                <h2>{title}</h2>
                {body
                  .filter((_, idx) => idx < 1)
                  .map((text) => (
                    <h3>{text} ...</h3>
                  ))}
              </Link>{" "}
            </AllPostImage>
          ))}
        </AllPostsContainer>
        <p id="categories"></p>
        <AllPostsContainer
          data-aos={"fade-up"}
          data-aos-duration={"1000"}
          style={{
            display: secondToggle ? "flex" : "none",
          }}
        >
          {topics[1]?.map(({ name, id, imgUrl }) => (
            <AllPostImage key={id}>
              <Link to={id} onClick={() => scrollToTop()}>
                <h2>{name}</h2>
              </Link>{" "}
            </AllPostImage>
          ))}
        </AllPostsContainer>

        <DevContact>
          <h4 data-aos={"fade-up"} data-aos-duration={"1000"}>
            Do you have any questions or would you like to talk about work?
          </h4>
          <h5 data-aos={"fade-up"} data-aos-duration={"1000"}>
            Please, send me an e-mail at{" "}
            <a href="mailto:myvendramini@gmail.com?subject=contact-for-coding-job">
              myvendramini@gmail.com
            </a>
            .
          </h5>
        </DevContact>
        <a href="#top">
          <h1>Back to top &uarr; </h1>
        </a>
      </PostsContainer>
    </Fragment>
  );
};

export default DevPosts;

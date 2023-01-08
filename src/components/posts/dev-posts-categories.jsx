import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../posts.data";
import { Link, useNavigate } from "react-router-dom";
import {
  PostsContainer,
  AllPostsContainer,
  AllPostImage,
  Gradient,
  BlogDescrible,
} from "./posts.styles";

const DevPostCategories = () => {
  const { topicId } = useParams();
  const topic = getTopic(topicId);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/blog");
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <PostsContainer>
        <Gradient> </Gradient>
        <AllPostsContainer>
          {topic.posts.map((sub) => (
            <AllPostImage key={sub.id}>
              <Link to={sub.id} onClick={scrollToTop}>
                {" "}
                <img src={sub.imgUrl} alt={`${sub.title}`} />
              </Link>
              <Link to={sub.id} onClick={scrollToTop}>
                <h2>{sub.title}</h2>
                {sub.body
                  .filter((_, idx) => idx < 1)
                  .map((text) => (
                    <h3>{text} ...</h3>
                  ))}
              </Link>
            </AllPostImage>
          ))}
        </AllPostsContainer>
      </PostsContainer>
      <PostsContainer>
        <a href="#top" onClick={goBack}>
          <h1>&larr; Back to all the posts </h1>
        </a>
      </PostsContainer>
    </Fragment>
  );
};

export default DevPostCategories;

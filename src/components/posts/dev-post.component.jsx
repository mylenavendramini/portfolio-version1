import React from "react";
import {

  PostContent,
  PostImage,
  GaleryPosts,
  ContainerWithSideBar,
  GaleryImage,
} from "./posts.styles";
import { useParams } from "react-router-dom";
import { getPost, getAllPosts } from "../../posts.data";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Post itself:
const DevPost = () => {
  const { topicId, postId } = useParams();
  const { title, id, body, imgUrl } = getPost({
    topicId,
    postId,
  });
  const allPosts = getAllPosts();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/blog");
    window.scrollTo(0, 0);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

   

  return (
    <div>
      <ContainerWithSideBar>
        <PostContent key={id} id={id}>
          <PostImage>
            {imgUrl.map((image) => (
              <img src={image} alt="post" />
            ))}
          </PostImage>
          {body.map((text) => (
            <h3>{text}</h3>
          ))}
        </PostContent>

        <GaleryPosts>
          <h1>You might also like:</h1>

          {allPosts
            .filter((_, idx) => idx < 4)
            .map((sub) => (
              <GaleryImage key={sub.id}>
                <Link to={`/blog/all/${sub.id}`} onClick={scrollToTop}>
                  {" "}
                  <img src={sub.imgUrl} alt={`${sub.title}`} />
                </Link>
              </GaleryImage>
            ))}
        </GaleryPosts>
        <PostContent>
          <a href="#top" onClick={goBack}>
            <h1>&larr; Back to all the posts </h1>
          </a>{" "}
        </PostContent>
      </ContainerWithSideBar>
      
    </div>
  );
};

export default DevPost;

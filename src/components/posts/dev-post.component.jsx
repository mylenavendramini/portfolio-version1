import React, { Fragment } from "react";
import { PostContainer, PostContent, PostImage } from "./posts.styles";

const DevPost = ({ post: { title, id, body, imgUrl, author } }) => {
  return (
    <div>
      <PostContent key={id} id={id}>
        <h1>{title}</h1>
        {/*<p>Author: {author}</p>*/}
        <PostImage>
          {imgUrl.map((image) => (
            <img src={image} alt="post" />
          ))}
        </PostImage>
        {body.map((text) => (
          <h3>{text}</h3>
        ))}
      </PostContent>
    </div>
  );
};

export default DevPost;

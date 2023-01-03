import React, { Fragment } from "react";
import {
  PostsContainer,
  AllPostsContainer,
  AllPostImage,
  Gradient,
} from "./travelling.styles";

import Footer from "../footer/footer.component";
import DevPost from "../../components/posts/dev-post.component";

const Travelling = () => {
  const travellingPosts = [
    {
      title: "Buenos Aires",
      id: "first-post",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        "Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
        "Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
      ],
      author: "Mylena Vendramini",

      imgUrl: ["/puertomadero1.jpeg", "/miami-beach.jpg"],
    },
    {
      title: "Miami",
      id: "second-post",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        "Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
      ],
      author: "Mylena Vendramini",

      imgUrl: ["/miami-beach.jpg", "/paris-me.jpg"],
    },
    {
      title: "Paris",
      id: "third-post",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        "Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
      ],

      author: "Mylena Vendramini",

      imgUrl: ["/paris-me.jpg", "/puertomadero1.jpeg"],
    },
  ];
  return (
    <div>
      <PostsContainer id="top">
        <Gradient>Viaja Mylena</Gradient>
        <AllPostsContainer data-aos={"fade-up"} data-aos-duration={"1000"}>
          {travellingPosts.map((post) => (
            <AllPostImage key={post.id}>
              <a href={"#" + post.id}>
                {" "}
                <h2>{post.title}</h2>
                <img src={post.imgUrl[0]} alt="post" />
              </a>
            </AllPostImage>
          ))}
        </AllPostsContainer>
        {travellingPosts.map((post) => (
          <div key={post.id}>
            <DevPost key={post.id} post={post} />
          </div>
        ))}
        <a href="#top">
          <h1>Voltar ao topo &uarr; </h1>
        </a>
      </PostsContainer>
      <Footer />
    </div>
  );
};

export default Travelling;

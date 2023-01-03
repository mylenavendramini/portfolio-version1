import React, { Fragment } from "react";
import DevPosts from "../posts/dev-posts.component";
import Footer from "../../routes/footer/footer.component";

const Blog = () => {
  return (
    <Fragment>
      <DevPosts />
      <Footer />
    </Fragment>
  );
};

export default Blog;

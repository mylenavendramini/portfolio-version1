import React, { Fragment } from "react";
import DevPosts from "../posts/dev-posts.component";
import Footer from "../../routes/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import DevPostRoute from "../../routes/dev-post/dev-post.route";

const Blog = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<DevPosts />} />
        <Route path=":topicId/*" element={<DevPostRoute />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default Blog;

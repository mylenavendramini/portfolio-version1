import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import DevPost from "../../components/posts/dev-post.component";
import DevPostCategories from "../../components/posts/dev-posts-categories";

const DevPostRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<DevPostCategories />} />
        <Route path=":postId" element={<DevPost />} />
      </Routes>
    </Fragment>
  );
};

export default DevPostRoute;

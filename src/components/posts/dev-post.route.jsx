import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import DevPost from "./dev-post.component";
import DevPostRoute2 from "./dev-post2.route";
import DevPosts from "./dev-posts.component";

const DevPostRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<DevPosts />} />
        <Route path=":postId/*" element={<DevPostRoute2 />} />

        <h1>TESTANDO</h1>
      </Routes>
    </Fragment>
  );
};

export default DevPostRoute;

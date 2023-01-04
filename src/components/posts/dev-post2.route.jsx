import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import DevPost from "./dev-post.component";

const DevPostRoute2 = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<DevPost />} />
      </Routes>
    </Fragment>
  );
};

export default DevPostRoute2;

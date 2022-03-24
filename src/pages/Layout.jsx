import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "../Routes/Routers";

export const Layout = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Fragment>
  );
};

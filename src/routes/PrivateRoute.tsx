import React from "react";
import { Navigate } from "react-router-dom";

import { RouteType } from "./types";

const PrivateRoute = ({ component }: RouteType) => {
  const isToken = localStorage.getItem("userToken");
  if (!isToken) {
    alert("토큰이 만료!");
    return <Navigate to="/login" />;
  }
  return component;
};

export default PrivateRoute;

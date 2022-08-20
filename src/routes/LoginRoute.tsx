import React from "react";
import { Navigate } from "react-router-dom";
import { RouteType } from "./types";

const LoginRoute = ({ component }: RouteType) => {
  const isToken = localStorage.getItem("userToken");
  if (isToken) {
    return <Navigate to="/" />;
  }
  return component;
};

export default LoginRoute;

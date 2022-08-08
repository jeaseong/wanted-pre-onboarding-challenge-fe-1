import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteType } from "types/type";

const PrivateRoute = ({ component }: RouteType) => {
  const navigate = useNavigate();
  const isToken = localStorage.getItem("userToken");
  if (!isToken) {
    navigate("/login");
    return <></>;
  }
  return component;
};

export default PrivateRoute;

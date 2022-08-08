import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouteType } from "types/type";

const LoginRoute = ({ component }: RouteType) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isToken = localStorage.getItem("userToken");
    if (isToken) {
      navigate("/");
    }
  }, []);

  return component;
};

export default LoginRoute;

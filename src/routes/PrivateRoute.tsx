import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "pages/login/Login";
import { RouteType } from "types/type";

const PrivateRoute = ({ component }: RouteType) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isToken = localStorage.getItem("userToken");
    if (!isToken) {
      alert("토큰이 만료!");
      navigate("/login");
    }
  }, []);

  return component;
};

export default PrivateRoute;

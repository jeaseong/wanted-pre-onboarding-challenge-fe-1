import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginRoute from "./LoginRoute";
import LogIn from "pages/login/Login";
import SignUp from "pages/signUp/SignUp";
const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<PrivateRoute component={<LogIn />} />} />
      <Route path="/sign-up" element={<LoginRoute component={<SignUp />} />} />
    </Routes>
  );
};

export default RoutesPage;

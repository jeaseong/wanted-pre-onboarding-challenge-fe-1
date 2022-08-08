import React, { useState } from "react";
import Input from "components/atoms/input/Input";
import { logIn } from "api/api";
import { authValidation } from "utils/validation";
import { Container, LoginForm, SubmitBtn } from "./Login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validation = authValidation({ email, password });
  console.log(email, password);
  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("헿");
    if (validation) {
      const authInfo = { email, password };
      try {
        const { message, token } = await logIn(authInfo);
        localStorage.setItem(token, "userToken");
      } catch (erroe) {
        alert("로그인 실패..! 다시 시도해주세요.");
      }
    }
  };
  return (
    <Container>
      <LoginForm onSubmit={handleOnSubmit}>
        <Input
          required
          onChange={handleOnChangeEmail}
          type="text"
          types="auth"
        />
        <Input
          required
          onChange={handleOnChangePassword}
          type="password"
          types="auth"
        />
        <SubmitBtn type="submit" disabled={!validation} />
      </LoginForm>
    </Container>
  );
};

export default Login;

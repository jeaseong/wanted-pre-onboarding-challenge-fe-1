import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/atoms/input/Input";
import useInput from "hooks/useInput";
import { logIn } from "api/api";
import { authValidation } from "utils/validation";
import { Container, LoginForm, SubmitBtn } from "./Login.style";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = useInput({ setValue: setEmail });
  const handleChangePassword = useInput({ setValue: setPassword });

  const validation = authValidation({ email, password });

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authInfo = { email, password };
    try {
      const { token } = await logIn(authInfo);
      localStorage.setItem("userToken", token);
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) alert(error.response?.data.details);
    }
  };
  return (
    <Container>
      <LoginForm onSubmit={handleOnSubmit}>
        <Input
          type="text"
          types="auth"
          onChange={handleChangeEmail}
          required={true}
        />
        <Input
          type="password"
          types="auth"
          onChange={handleChangePassword}
          required={true}
        />
        <SubmitBtn type="submit" disabled={!validation}>
          로그인
        </SubmitBtn>
      </LoginForm>
    </Container>
  );
};

export default Login;

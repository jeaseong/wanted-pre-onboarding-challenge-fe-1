import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/atoms/input/Input";
import { logIn } from "api/api";
import { authValidation } from "utils/validation";
import { debounce } from "utils/debounce";
import { Container, LoginForm, SubmitBtn } from "./Login.style";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validation = authValidation({ email, password });
  const handleOnChangeEmail = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    300
  );
  const handleOnChangePassword = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    150
  );
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validation) {
      const authInfo = { email, password };
      try {
        const { message, token } = await logIn(authInfo);
        localStorage.setItem("userToken", token);
        navigate("/");
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
          placeholder="email"
          onChange={handleOnChangeEmail}
          type="text"
          types="auth"
        />
        <Input
          required
          placeholder="password"
          onChange={handleOnChangePassword}
          type="password"
          types="auth"
        />
        <SubmitBtn type="submit" disabled={!validation}>
          로그인
        </SubmitBtn>
      </LoginForm>
    </Container>
  );
};

export default Login;

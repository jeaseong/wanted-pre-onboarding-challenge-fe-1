import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";
import { logIn } from "api/api";
import { authValidation } from "utils/validation";
import { Container, LoginForm, SubmitBtn } from "./Login.style";

const Login = () => {
  const navigate = useNavigate();
  const [email, emailInput] = useInput({
    type: "text",
    types: "auth",
    placeholder: "email",
    required: true,
  });
  const [password, passwordInput] = useInput({
    type: "password",
    types: "auth",
    placeholder: "email",
    required: true,
  });
  const validation = authValidation({ email, password });
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validation) {
      const authInfo = { email, password };
      try {
        const { message, token } = await logIn(authInfo);
        localStorage.setItem("userToken", token);
        navigate("/");
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <Container>
      <LoginForm onSubmit={handleOnSubmit}>
        {emailInput}
        {passwordInput}
        <SubmitBtn type="submit" disabled={!validation}>
          로그인
        </SubmitBtn>
      </LoginForm>
    </Container>
  );
};

export default Login;

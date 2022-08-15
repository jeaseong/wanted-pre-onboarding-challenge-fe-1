import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/atoms/input/Input";
import useInput from "hooks/useInput";
import useAuthSubmit from "hooks/useAuthSubmit";
import { logIn } from "api/api";
import { authValidation } from "utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = useInput({ setValue: setEmail });
  const handleChangePassword = useInput({ setValue: setPassword });

  const validation = authValidation({ email, password });

  const handleOnSubmit = useAuthSubmit({
    email,
    password,
    api: logIn,
    locationTo: "/",
  });

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

const Container = styled.section``;

const LoginForm = styled.form``;

const SubmitBtn = styled.button``;

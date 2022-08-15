import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/atoms/input/Input";
import useInput from "hooks/useInput";
import useAuthSubmit from "hooks/useAuthSubmit";
import { signUp } from "api/api";
import { authValidation } from "utils/validation";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validation = authValidation({ email, password });

  const handleChangeEmail = useInput({ setValue: setEmail });
  const handleChangePassword = useInput({ setValue: setPassword });

  const handleOnSubmit = useAuthSubmit({
    email,
    password,
    api: signUp,
    locationTo: "/login",
  });

  return (
    <Container>
      <SignUpForm onSubmit={handleOnSubmit}>
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
          회원가입
        </SubmitBtn>
      </SignUpForm>
    </Container>
  );
};

export default SignUp;

const Container = styled.section``;

const SignUpForm = styled.form``;

const SubmitBtn = styled.button``;

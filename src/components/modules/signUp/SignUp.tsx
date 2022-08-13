import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/atoms/input/Input";
import useInput from "hooks/useInput";
import { signUp } from "api/api";
import { authValidation } from "utils/validation";
import { Container, SignUpForm, SubmitBtn } from "./SignUp.styled";
import { AxiosError } from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = useInput({ setValue: setEmail });
  const handleChangePassword = useInput({ setValue: setPassword });

  const validation = authValidation({ email, password });

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const authInfo = { email, password };
      await signUp(authInfo);
      navigate("/login");
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(e.response?.data.details);
      }
    }
  };
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

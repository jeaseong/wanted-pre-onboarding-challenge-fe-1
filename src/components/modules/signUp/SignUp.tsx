import React, { useState } from "react";
import Input from "components/atoms/input/Input";
import { signUp } from "api/api";
import { authValidation } from "utils/validation";
import { debounce } from "utils/debounce";
import { Container, SignUpForm, SubmitBtn } from "./SignUp.styled";
const SignUp = () => {
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
      try {
        const authInfo = { email, password };
        await signUp(authInfo);
      } catch (e) {
        alert("회원가입 실패..@");
      }
    }
  };
  return (
    <Container>
      <SignUpForm onSubmit={handleOnSubmit}>
        <Input
          placeholder="email"
          required
          onChange={handleOnChangeEmail}
          type="text"
          types="auth"
        />
        <Input
          placeholder="password"
          required
          onChange={handleOnChangePassword}
          type="text"
          types="auth"
        />
        <SubmitBtn type="submit" disabled={!validation}>
          회원가입
        </SubmitBtn>
      </SignUpForm>
    </Container>
  );
};

export default SignUp;

import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";
import { signUp } from "api/api";
import { authValidation } from "utils/validation";
import { Container, SignUpForm, SubmitBtn } from "./SignUp.styled";
const SignUp = () => {
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
      try {
        const authInfo = { email, password };
        await signUp(authInfo);
        navigate("/login");
      } catch (e) {
        alert("회원가입 실패..@");
      }
    }
  };
  return (
    <Container>
      <SignUpForm onSubmit={handleOnSubmit}>
        {emailInput}
        {passwordInput}
        <SubmitBtn type="submit" disabled={!validation}>
          회원가입
        </SubmitBtn>
      </SignUpForm>
    </Container>
  );
};

export default SignUp;

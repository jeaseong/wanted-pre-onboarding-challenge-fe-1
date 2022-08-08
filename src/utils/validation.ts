import { authTypes } from "types/api";
const passwordValidation = (password: string) => {
  return password.length >= 8;
};

const emailValidation = (email: string) => {
  const emailRule =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRule.test(email);
};

export const authValidation = (authInfo: authTypes) => {
  const { email, password } = authInfo;
  return passwordValidation(password) && emailValidation(email);
};

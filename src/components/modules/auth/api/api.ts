import { Axios } from "api/customAxios";
import { authTypes } from "../types";

export const logIn = async (authInfo: authTypes) => {
  const apiURL = "users/login";
  const { data } = await Axios.post(apiURL, authInfo);
  return data;
};

export const signUp = async (authInfo: authTypes) => {
  const apiURL = "users/create";
  const { data } = await Axios.post(apiURL, authInfo);
  return data;
};

import axios, { AxiosInstance } from "axios";
import { access } from "fs";

const serverURL = `${process.env.REACT_APP_API_SERVER}`;

const Axios: AxiosInstance = axios.create({
  baseURL: serverURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("userToken");
  if (config && accessToken) {
    config.headers = {
      authorization: `${accessToken}`,
    };
  }
  return config;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data)
);

export { Axios };

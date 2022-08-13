import React from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface User {
  email: string;
  password: string;
}

interface Props extends User {
  api: <T>(value: User) => Promise<T>;
  locationTo: string;
}

const useAuthSubmit = ({ email, password, api, locationTo }: Props) => {
  const navigate = useNavigate();
  const handleOnSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const { token } = await api(user);
      localStorage.setItem("userToken", token);
      navigate(locationTo);
    } catch (error) {
      if (error instanceof AxiosError) alert(error.response?.data.details);
    }
  };
  return handleOnSubmit;
};

export default useAuthSubmit;

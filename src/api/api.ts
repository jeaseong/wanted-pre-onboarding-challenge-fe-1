import { Axios } from "api/customAxios";
import { authTypes, todoType } from "types/api";

export const logIn = async (authInfo: authTypes) => {
  const apiURL = "users/login";
  const { data } = await Axios.post(apiURL, authInfo);
  return data;
};

export const signUp = async (authInfo: authTypes) => {
  const apiURL = "users/create";
  await Axios.post(apiURL, authInfo);
};

export const getTodos = async () => {
  const apiURL = "todos";
  const { data } = await Axios.get(apiURL);
  return data;
};

export const getTodoById = async (id: string) => {
  const apiURL = `todos/${id}`;
  const { data } = await Axios.get(apiURL);
  return data;
};

export const createTodo = async (todo: todoType) => {
  const apiURL = `todos`;
  const { data } = await Axios.post(apiURL, todo);
  return data;
};

export const updateTodo = async (id: string, todo: todoType) => {
  const apiURL = `todos/${id}`;
  const { data } = await Axios.put(apiURL, todo);
  return data;
};

export const deleteTodo = async (id: string) => {
  const apiURL = `todos/${id}`;
  await Axios.delete(apiURL);
};

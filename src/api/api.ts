import { Axios } from "api/customAxios";
import { ParamsId } from "types/type";
import { authTypes, todoType } from "types/api";

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

export const getTodos = async () => {
  const apiURL = "todos";
  const { data } = await Axios.get(apiURL);
  return data.data;
};

export const getTodoById = async (id: ParamsId) => {
  if (id) {
    const apiURL = `todos/${id}`;
    const { data } = await Axios.get(apiURL);
    return data.data;
  }
  throw Error();
};

export const createTodo = async (todo: todoType) => {
  const apiURL = `todos`;
  await Axios.post(apiURL, todo);
};

export const updateTodo = async (id: string, todo: todoType) => {
  const apiURL = `todos/${id}`;
  await Axios.put(apiURL, todo);
  console.log("ㅝ야?");
};

export const deleteTodo = async (id: ParamsId) => {
  const apiURL = `todos/${id}`;
  await Axios.delete(apiURL);
};

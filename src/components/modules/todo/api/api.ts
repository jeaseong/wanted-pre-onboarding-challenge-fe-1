import { Axios } from "api/customAxios";
import { ParamsId } from "../types";
import { todoType } from "components/modules/todo/types";

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

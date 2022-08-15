import { useQuery } from "@tanstack/react-query";
import { getTodos } from "api/api";

const useGetTodos = () => {
  return useQuery(["todos"], getTodos);
};

export default useGetTodos;

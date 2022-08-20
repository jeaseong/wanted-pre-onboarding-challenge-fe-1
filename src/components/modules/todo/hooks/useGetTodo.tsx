import { useQuery } from "@tanstack/react-query";
import { getTodoById } from "components/modules/todo/api/api";
type Param = string | undefined;

const useGetTodoById = (id: Param) => {
  return useQuery(["todo", id], () => getTodoById(id), {
    onError: () => {
      return null;
    },
  });
};

export default useGetTodoById;

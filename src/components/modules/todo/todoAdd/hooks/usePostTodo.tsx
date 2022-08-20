import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createTodo } from "components/modules/todo/api/api";
import { todoType } from "types/api";

const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((todo: todoType) => createTodo(todo), {
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        alert(e.response?.data.details);
      }
    },
  });
};

export default usePostTodo;

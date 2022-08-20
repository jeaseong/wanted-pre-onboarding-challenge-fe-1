import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { updateTodo } from "components/modules/todo/api/api";
import { todoType } from "components/modules/todo/types";

interface Params {
  id: string;
  todo: todoType;
}
const usePutTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(({ id, todo }: Params) => updateTodo(id, todo), {
    onSuccess: () => {
      queryClient.invalidateQueries(["todo", id]);
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        alert(e.response?.data.details);
      }
    },
  });
};

export default usePutTodo;

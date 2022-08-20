import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteTodo } from "components/modules/todo/api/api";
import { ParamsId } from "../../types";

const useDelTodo = (id: ParamsId) => {
  const queryClient = useQueryClient();
  return useMutation((id: ParamsId) => deleteTodo(id), {
    onSettled: () => {
      queryClient.invalidateQueries(["todos"]);
      queryClient.invalidateQueries(["todo", id]);
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        alert(e.response?.data.details);
      }
    },
  });
};

export default useDelTodo;

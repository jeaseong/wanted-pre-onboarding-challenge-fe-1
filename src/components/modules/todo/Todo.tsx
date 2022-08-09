import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getTodos } from "api/api";
import TodoList from "components/modules/todo/todoList/TodoList";
import TodoDetail from "components/modules/todo/todoDetail/TodoDetail";
import TodoAdd from "components/modules/todo/todoAdd/TodoAdd";
import { Todos } from "types/type";
import { Container } from "./Todo.style";

const Todo = () => {
  const params = useParams();
  const id = params.id as string;
  const [todos, setTodos] = useState<Todos[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await getTodos();
      setTodos(data);
    };
    fetchApi();
  }, []);

  const handleAddTodo = (todo: Todos) => {
    setTodos((cur) => {
      return [...cur, todo];
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((cur) => {
      return cur.filter((item) => !(item.id === id));
    });
  };
  const handleUpdateTodo = (id: string, todo: Todos) => {
    setTodos((cur) => {
      const index = cur.findIndex((item) => item.id === id);
      const front = cur.slice(0, index);
      const back = cur.slice(index + 1);
      const newArr = [...front, todo, ...back];
      return newArr;
    });
  };

  return (
    <Container>
      <TodoAdd handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
      <TodoDetail
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
        id={id}
      />
    </Container>
  );
};

export default Todo;

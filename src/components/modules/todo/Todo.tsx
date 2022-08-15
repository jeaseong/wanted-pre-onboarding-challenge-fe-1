import React from "react";
import styled from "styled-components";
import TodoAdd from "components/modules/todo/todoAdd/TodoAdd";
import useGetTodos from "hooks/useGetTodos";

const TodoList = React.lazy(
  () => import("components/modules/todo/todoList/TodoList")
);
const TodoDetail = React.lazy(
  () => import("components/modules/todo/todoDetail/TodoDetail")
);

const Todo = () => {
  const { data } = useGetTodos();
  return (
    <React.Suspense fallback={<>오우 마이갓@</>}>
      <Container>
        <TodoAdd />
        <TodoList todos={data} />
        <TodoDetail />
      </Container>
    </React.Suspense>
  );
};

export default Todo;

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  min-height: 300px;
  display: flex;
  gap: 20px;
`;

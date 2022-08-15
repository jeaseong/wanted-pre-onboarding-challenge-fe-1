import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TodosType } from "types/type";

const TodoList = ({ todos }: TodosType) => {
  const navigate = useNavigate();
  const handleOnClickNavigate = (id: string) => {
    navigate(`/detail/${id}`);
  };
  if (todos)
    return (
      <Container>
        <TodoHead>List</TodoHead>
        <TodoBody>
          <TodoItems>
            {todos.map((todo) => (
              <TodoItem
                onClick={() => handleOnClickNavigate(todo.id)}
                key={todo.id}
              >
                {todo.title}
              </TodoItem>
            ))}
          </TodoItems>
        </TodoBody>
      </Container>
    );
  else return <></>;
};

export default React.memo(TodoList);

const Container = styled.article`
  width: 100%;
  border: 1px solid black;
`;

const TodoHead = styled.h2``;

const TodoBody = styled.section``;

const TodoItems = styled.ul``;

const TodoItem = styled.li``;

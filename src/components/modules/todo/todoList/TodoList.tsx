import React from "react";
import { useNavigate } from "react-router-dom";
import { TodosType } from "types/type";
import {
  Container,
  TodoHead,
  TodoBody,
  TodoItems,
  TodoItem,
} from "./TodoList.style";
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

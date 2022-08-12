import React from "react";
import useInput from "hooks/useInput";
import useTextarea from "hooks/useTextarea";
import { createTodo } from "api/api";
import { AddType } from "types/type";
import { Container, InputBox, Title } from "./TodoAdd.style";

const TodoAdd = ({ handleAddTodo }: AddType) => {
  const [todo, todoInput] = useInput({
    type: "text",
    types: "todo",
    placeholder: "todo",
    required: true,
  });
  const [todoDetail, todoDetailArea] = useTextarea({ required: true });

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todos = { title: todo, content: todoDetail };
    try {
      const { data } = await createTodo(todos);
      handleAddTodo(data);
    } catch (e) {
      alert("다시 써야겠는걸요?");
    }
  };
  return (
    <Container onSubmit={handleOnSubmit}>
      <InputBox>
        <Title>할 일</Title>
        {todoInput}
      </InputBox>
      <InputBox>
        <Title>상세</Title>
        {todoDetailArea}
      </InputBox>
      <button type="submit">등록</button>
    </Container>
  );
};

export default React.memo(TodoAdd);

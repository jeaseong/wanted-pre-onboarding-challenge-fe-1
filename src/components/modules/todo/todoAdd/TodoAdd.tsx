import React, { useState } from "react";
import { AxiosError } from "axios";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/textarea/TextArea";
import useInput from "hooks/useInput";
import { createTodo } from "api/api";
import { AddType } from "types/type";
import { Container, InputBox, Title } from "./TodoAdd.style";

const TodoAdd = ({ handleAddTodo }: AddType) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = useInput({ setValue: setTitle });
  const handleChangeContent = useInput({ setValue: setContent });

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todos = { title, content };
    try {
      const { data } = await createTodo(todos);
      handleAddTodo(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(e.response?.data.details);
      }
    }
  };
  return (
    <Container onSubmit={handleOnSubmit}>
      <InputBox>
        <Title>할 일</Title>
        <Input type="text" types="todo" onChange={handleChangeTitle} />
      </InputBox>
      <InputBox>
        <Title>상세</Title>
        <TextArea onChange={handleChangeContent} required={true} />
      </InputBox>
      <button type="submit">등록</button>
    </Container>
  );
};

export default React.memo(TodoAdd);

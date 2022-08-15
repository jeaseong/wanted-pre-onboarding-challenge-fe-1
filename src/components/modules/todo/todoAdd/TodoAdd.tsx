import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/textarea/TextArea";
import usePostTodo from "hooks/usePostTodo";
import useInput from "hooks/useInput";

const TodoAdd = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoMutation = usePostTodo();

  const handleChangeTitle = useInput({ setValue: setTitle });
  const handleChangeContent = useInput({ setValue: setContent });

  const init = () => {
    setTitle("");
    setContent("");
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = { title, content };
    addTodoMutation.mutate(todo);
    init();
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

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3``;

import React, { useState } from "react";
import styled from "styled-components";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/textarea/TextArea";
import usePutTodo from "hooks/usePutTodo";
import { Todos } from "types/type";

interface Props {
  todo: Todos;
  handleOnEditForm: () => void;
}

const TodoEdit = ({ todo, handleOnEditForm }: Props) => {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const updateTodoMutation = usePutTodo(todo.id);

  const handleOnChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const props = {
      id: todo.id,
      todo: {
        title: title,
        content: content,
      },
    };
    updateTodoMutation.mutate(props);
    handleOnEditForm();
  };

  return (
    <Container onSubmit={handleOnSubmit}>
      <Input
        type="text"
        types="todo"
        value={title}
        onChange={handleOnChangeTodo}
      />
      <TextArea onChange={handleOnChangeDetail} value={content} />
      <button type="submit">수정 완료</button>
    </Container>
  );
};

export default TodoEdit;

const Container = styled.form``;

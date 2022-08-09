import React, { useState } from "react";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/textarea/TextArea";
import { updateTodo } from "api/api";
import { EditType } from "types/type";
import { Container } from "./TodoEdit.style";

const TodoEdit = ({ todo, handleUpdateTodo, handleOnEditForm }: EditType) => {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const handleOnChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleOnChangeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newTodo = { title, content };
      const { data } = await updateTodo(todo.id, newTodo);
      handleUpdateTodo(todo.id, data);
      handleOnEditForm();
    } catch (e) {
      alert("다시 써야겠는걸요?");
    }
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

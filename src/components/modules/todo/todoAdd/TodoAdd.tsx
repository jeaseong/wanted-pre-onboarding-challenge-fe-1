import React, { useState } from "react";
import Input from "components/atoms/input/Input";
import Area from "components/atoms/textarea/TextArea";
import { debounce } from "utils/debounce";
import { createTodo } from "api/api";
import { AddType } from "types/type";
import { Container, InputBox, Title } from "./TodoAdd.style";

const TodoAdd = ({ handleAddTodo }: AddType) => {
  const [todo, setTodo] = useState("");
  const [todoDetail, setTodoDetail] = useState("");

  const initalTodo = () => {
    setTodo("");
    setTodoDetail("");
  };
  const handleOnChangeTodo = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(e.target.value);
    },
    200
  );
  const handleOnChangeDetail = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTodoDetail(e.target.value);
    },
    200
  );
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
        <Input onChange={handleOnChangeTodo} type="text" types="todo" />
      </InputBox>
      <InputBox>
        <Title>상세</Title>
        <Area onChange={handleOnChangeDetail} />
      </InputBox>
      <button type="submit">등록</button>
    </Container>
  );
};

export default TodoAdd;

import React, { useState } from "react";
import Input from "components/atoms/input/Input";
import Area from "components/atoms/textarea/TextArea";
import useInput from "hooks/useInput";
import { debounce } from "utils/debounce";
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
  const [todoDetail, setTodoDetail] = useState("");

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
        {todoInput}
      </InputBox>
      <InputBox>
        <Title>상세</Title>
        <Area onChange={handleOnChangeDetail} value={todoDetail} />
      </InputBox>
      <button type="submit">등록</button>
    </Container>
  );
};

export default TodoAdd;

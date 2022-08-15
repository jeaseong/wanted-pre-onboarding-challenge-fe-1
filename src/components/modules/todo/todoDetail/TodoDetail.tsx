import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TodoEdit from "components/modules/todo/todoEdit/TodoEdit";
import useGetTodo from "hooks/useGetTodo";
import useDelTodo from "hooks/useDelTodo";

const TodoDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const [isEdit, setIsEdit] = useState(false);

  const { data } = useGetTodo(id);
  const delTodoMutation = useDelTodo(id);

  const handleDelTodo = () => {
    delTodoMutation.mutate(id);
    navigate("/");
  };

  const handleOnEditForm = () => {
    setIsEdit((cur) => !cur);
  };
  if (data)
    return (
      <Container>
        {!isEdit ? (
          <>
            <TodoHead>{data.title}</TodoHead>
            <TodoContent>{data.content}</TodoContent>
          </>
        ) : (
          <TodoEdit todo={data} handleOnEditForm={handleOnEditForm}></TodoEdit>
        )}

        {!isEdit && <button onClick={handleOnEditForm}>수정</button>}

        <button onClick={handleDelTodo}>삭제</button>
      </Container>
    );
  else
    return (
      <Container>
        <TodoHead></TodoHead>
        <TodoContent></TodoContent>
      </Container>
    );
};

export default React.memo(TodoDetail);

const Container = styled.article`
  width: 100%;
  border: 1px solid black;
`;

const TodoHead = styled.h2``;

const TodoContent = styled.p``;

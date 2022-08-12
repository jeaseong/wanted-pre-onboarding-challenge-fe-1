import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoEdit from "components/modules/todo/todoEdit/TodoEdit";
import { getTodoById, deleteTodo } from "api/api";
import { DetailType, Todos } from "types/type";
import { Container, TodoHead, TodoContent } from "./TodoDetail.style";
const initalData = {
  title: "",
  content: "",
  id: "",
  createdAt: "",
  updatedAt: "",
};
const TodoDetail = ({ id, handleDeleteTodo, handleUpdateTodo }: DetailType) => {
  const navigate = useNavigate();
  const [todoById, setTodoById] = useState<Todos>();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchApi = async () => {
        const { data } = await getTodoById(id);
        setTodoById(data);
      };
      fetchApi();
    } else {
      setTodoById(initalData);
    }
  }, [id, isEdit]);

  const handleOnEditForm = () => {
    setIsEdit((cur) => !cur);
  };

  const handleOnDelete = async (id: string) => {
    if (id) {
      await deleteTodo(id);
      handleDeleteTodo(id);
      navigate("/");
    }
  };
  if (todoById)
    return (
      <Container>
        {!isEdit ? (
          <>
            <TodoHead>{todoById.title}</TodoHead>
            <TodoContent>{todoById.content}</TodoContent>
          </>
        ) : (
          <TodoEdit
            todo={todoById}
            handleUpdateTodo={handleUpdateTodo}
            handleOnEditForm={handleOnEditForm}
          />
        )}

        {id && (
          <>
            {!isEdit && <button onClick={handleOnEditForm}>수정</button>}

            <button onClick={() => handleOnDelete(todoById.id)}>삭제</button>
          </>
        )}
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

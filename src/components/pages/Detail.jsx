import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "../../redux/modules/todos";
import styled from "styled-components";
import style from "style";

function Detail() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const param = useParams();
  const todo = todos.find((todo) => todo.id === param.id);

  const navigate = useNavigate();

  const HandleGoback = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   dispatch(getTodoById(id));
  // }, []);

  return (
      <Container>
        <In>
          <Box>
            <Id>ID : {todo.id}</Id>
            <Button onClick={HandleGoback}>돌아가기</Button>
          </Box>
          <Title>{todo.title}</Title>
        </In>
        <Contents>{todo.contents}</Contents>
      </Container>
  );
}

// style-component

const Container = styled.div`
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #eee;
  color: black;
`;
const In = styled.div`
  margin: 20px 30px;
`;
const Id = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 15px 30px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: teal;
  &:hover {
    background-color: grey;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 40px;
`;
const Contents = styled.p`
  font-size: 18px;
  font-weight: light;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export default Detail;

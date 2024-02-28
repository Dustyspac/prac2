import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, statusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

function State() {
  const todo = useSelector((states) => states.todos.todos);
  console.log(todo.todos);

  const dispatch = useDispatch();

  const onDeleteHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const onDoneHandler = (id) => {
    dispatch(statusTodo(id));
  };

  return (
    <>
      <WorkingContainer>
        <h3>Working.. 🔥</h3>
        {todo.map((item) => {
          return !item.isDone ? (
            <div className="card" key={item.id}>
              <Link to={`/${item.id}`} key={item.id}>
                <p>상세보기</p>
              </Link>
              <h2>{item.title}</h2>
              <p>{item.contents}</p>
              <div className="switchButton">
                <button onClick={() => onDoneHandler(item.id)}>
                  {item.isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
              </div>
            </div>
          ) : null;
        })}
      </WorkingContainer>

      <DoneContainer>
        <h3>Done.. 🎉</h3>
        {todo.map((item) => {
          return item.isDone ? (
            <div className="card" key={item.id}>
              <Link to={`/${item.id}`} key={item.id}>
                <p>상세보기</p>
              </Link>
              <h2>{item.title}</h2>
              <p>{item.contents}</p>
              <div className="switchButton">
                <button onClick={() => onDoneHandler(item.id)}>
                  {item.isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => onDeleteHandler(item.id)}>삭제</button>
              </div>
            </div>
          ) : null;
        })}
      </DoneContainer>
    </>
  );
}

// style-component

const WorkingContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
  }

  .card {
    width:300px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #FFF;
    border-radius: 5px;
    border: 2px solid green;
  }

  button {
    height: 40px;
    width: 80px;
    margin-right: 10px;
    background-color: red;
    border: 2px solid red;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FFF;
  }

  button:first-of-type {
    border: 2px solid green;
  }

`;

const DoneContainer = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 24px;
  }

  .card {
    width:300px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #FFF;
    border-radius: 5px;
    border: 2px solid green;
  }

  button {
    height: 40px;
    width: 80px;
    margin-right: 10px;
    background-color: red;
    border: 2px solid red;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FFF;
  }

  button:first-of-type {
    border: 2px solid green;
  }

`;


export default State;

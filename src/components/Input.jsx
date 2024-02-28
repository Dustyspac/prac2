import React, {useState} from "react";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddBtnStyle } from '../styles/componentStyles';

function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    if (title === "") return;
    if (contents === "") return;
    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };
    dispatch(addTodo(newTodo));

    setTitle("");
    setContents("");
  };

  return (
    <StyledInput>
      <form onSubmit={handleSubmitButtonClick}>
        <Row>
        <Label> 제목: </Label>
        <InputText
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Label> 내용: </Label>
        <InputText2
          type="text"
          value={contents}
          placeholder="내용을 입력하세요."
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <AddBtnStyle onClick={handleSubmitButtonClick}>추가하기</AddBtnStyle>
        </Row>
      </form>
    </StyledInput>
  );
}

// styled component 작성 시작

const StyledInput = styled.div`
  width: 1120px;
  background-color: #eee;
  padding: 25px 40px;
  border-radius: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 70px;
`;

const InputText = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const InputText2 = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;


export default Input;

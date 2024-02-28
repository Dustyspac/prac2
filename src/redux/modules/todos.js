// import { v4 as uuidv4 } from "uuid";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const statusTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: "1",
      title: "React 공부하기",
      contents: "열심히 공부하기",
      isDone: false,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case SWITCH_TODO:
      return {
        todos: state.todos.map((item) => 
          item.id === action.payload ? {...item, isDone: !item.isDone} : item
          )
        };
    case GET_TODO_BY_ID:
      return {
        todos: state.todos.find((item) => {
          return item.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todos;

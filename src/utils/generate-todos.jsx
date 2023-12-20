import { getDate } from "./get-date";
import { nanoid } from "nanoid";

export const generateTodos = (value = 5000) => {
  const todos = [];

  for (let i = 0; i < value; i++) {
    todos.push(generateTodo());
  }

  return todos;
};
const generateTodo = () => {
  return {
    value: getRandomString(),
    done: Math.random() > 0.5,
    date: getDate(),
    id: nanoid(),
  };
};

const getRandomString = () => Math.random().toString(36).substring(2);

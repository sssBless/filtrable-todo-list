import { useCallback, useState, useMemo, useEffect } from "react";
import InputItem from "./InputItem";
import TodoItem from "./TodoItem";
import MessageBox from "./MessageBox";
import SortedBox from "./SortedBox";
import { getDate } from "../utils/get-date";
import { generateTodos } from "../utils/generate-todos";
import { sortList } from "../utils/sort-list";
import { FilterBox } from "./FilterBox";
import { nanoid } from "nanoid";
import "../index.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [buttonState, setButtonState] = useState("unavailable");
  const [isLoading, setIsLoadning] = useState(true);
  const [sortedField, setSortedField] = useState("date");
  const [sortedOrder, setSortedOrder] = useState("new");
  const [toggle, setToggle] = useState(false);

  const allTodos = todos.length;

  const doneTodos = useMemo(
    () => todos.filter((todo) => todo.done).length,
    [todos]
  );

  const leftTodos = allTodos - doneTodos;

  useEffect(() => {
    setIsLoadning(true);
    setTimeout(() => {
      setIsLoadning(false);
      setTodos(generateTodos(10));
    }, 2000);
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleDoneTodo = useCallback((done, id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, done } : todo))
    );
  }, []);

  function handelAddTodo() {
    const todo = {
      value,
      id: nanoid(),
      done: false,
      date: getDate(),
    };
    setValue("");
    setButtonState("unavailable");
    setTodos(sortList([todo].concat(todos), sortedField, sortedOrder));
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className={"TodoList"}>
      <MessageBox All={allTodos} Done={doneTodos} Left={leftTodos} />
      <InputItem
        value={value}
        setValue={setValue}
        onAdd={handelAddTodo}
        btnClass={buttonState}
        onBtnClass={setButtonState}
      />
      <FilterBox onFilter={toggler} />
      <SortedBox
        onSortOrder={setSortedOrder}
        onSortedField={setSortedField}
        list={todos}
      />
      <div className="TodosContainer">
        {todos
          .filter((todo) => !todo.done || !toggle)
          .map((todo) => (
            <TodoItem
              id={todo.id}
              onDelete={handleDeleteTodo}
              onDone={handleDoneTodo}
              key={todo.id}
              text={todo.value}
              done={todo.done}
              date={todo.date}
            />
          ))}
      </div>
    </div>
  );
}

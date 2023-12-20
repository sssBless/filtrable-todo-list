import React from "react";
import "../index.css";

const TodoItem = ({ text, date, onDone, onDelete, id, done }) => {
  console.log(`render ${text} item`);
  return (
    <div className={done ? "TodoItem done" : "TodoItem"}>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          onDone(e.target.checked, id);
        }}
      />
      <div className={"TextContainer"}>{text}</div>
      <div className="DateContainer">{date}</div>
      <button
        onClick={() => {
          onDelete(id);
        }}
        className="DeleteBtn"
      >
        {/* Delete */}✕
      </button>
    </div>
  );
};
export default React.memo(TodoItem);

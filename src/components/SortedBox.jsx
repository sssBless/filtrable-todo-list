import { sortList } from "../utils/sort-list";
import "../index.css";
import { useState } from "react";

export default function SortedBox({ onSortedField, onSortOrder, list }) {
  const [isBtnClicked, setIsBtnClicked] = useState(["false", "true", "false"]);

  const handleSetData = (number, sortedField, sortedOrder) => {
    onSortedField(sortedField);
    onSortOrder(sortedOrder);
    sortList(list, sortedField, sortedOrder);
    setIsBtnClicked(
      isBtnClicked.map((_, i) => {
        if (i === number) return "true";
        else return "false";
      })
    );
  };

  return (
    <div className="SortedBox">
      <button
        onClick={() => handleSetData(0, "value", "direct")}
        className={isBtnClicked[0] === "true" ? "SortBtn clicked" : "SortBtn"}
      >
        Alphabet
      </button>
      <button
        onClick={() => handleSetData(1, "date", "new")}
        className={isBtnClicked[1] === "true" ? "SortBtn clicked" : "SortBtn"}
      >
        To new
      </button>
      <button
        onClick={() => handleSetData(2, "date", "old")}
        className={isBtnClicked[2] === "true" ? "SortBtn clicked" : "SortBtn"}
      >
        To old
      </button>
    </div>
  );
}

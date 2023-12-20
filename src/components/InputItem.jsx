import "../index.css";
export default function InputItem({
  value,
  setValue,
  onAdd,
  btnClass,
  onBtnClass,
}) {
  return (
    <div className="InputContainer">
      <input
        value={value}
        onInput={(e) => {
          const text = e.target.value;
          if (text.length !== 0 && text.trim() === text && text !== "") {
            onBtnClass("available");
            setValue(e.target.value);
          } else {
            onBtnClass("unavailable");
            setValue(e.target.value);
          }
        }}
        className="InputItem"
      />
      <button onClick={onAdd} className={btnClass}>
        Add new todo
      </button>
    </div>
  );
}

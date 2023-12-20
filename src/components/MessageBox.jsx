import "../index.css";

export default function MessageBox({ All, Done, Left }) {
  return (
    <div className="MessageBox">
      <div>All tasks: {All}</div>
      <div>Done tasks: {Done}</div>
      <div>Left tasks: {Left}</div>
    </div>
  );
}

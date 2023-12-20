import { Switch } from "antd";
import "../index.css";

export const FilterBox = ({ onFilter }) => {
  return (
    <div className="FilterBox">
      <label>
        Filter: <Switch onClick={onFilter} /> only less
      </label>
    </div>
  );
};

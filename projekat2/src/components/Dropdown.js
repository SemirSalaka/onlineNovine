import React from "react";

const Dropdown = ({ text, items, state, onChange }) => {
  return (
    <label>
      {text}
      <select defaultValue="default" onChange={onChange}>
        <option value="default" disabled>
          {" "}
          -- Odaberi opciju --{" "}
        </option>
        {items.map((item, key) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Dropdown;

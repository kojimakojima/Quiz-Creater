/** @format */

import React from "react";

// Resusable component
export const Input = ({ children, value, setter }) => {
  return (
    <div className="input-container">
      <label>{children}: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />
    </div>
  );
};

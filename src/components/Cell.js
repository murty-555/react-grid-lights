import React from "react";

const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={filled ? "cell cell-activated" : "cell"}
      onClick={onClick}
      disabled={isDisabled}
    >
    </button>
  );
};

export default Cell;

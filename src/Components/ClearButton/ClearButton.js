import React from "react";
import "./clearButton.css";

const ClearButton = ({ children, handleClick }) => {
  return (
    <div className="clear-button" onClick={handleClick}>
      {children}
    </div>
  );
};

export default ClearButton;

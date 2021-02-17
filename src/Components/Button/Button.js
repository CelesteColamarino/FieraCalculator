import React from "react";
import "./button.css";

const Button = ({ children, handleClick }) => {
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=" ? "" : "operator";
  };
  return (
    <div
      className={`button ${isOperator(children)}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;

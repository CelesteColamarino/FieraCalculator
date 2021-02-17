import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(0);

  const addToInput = (val) => {
    const result = input ? input + val : val;
    setInput(result);
  };

  return (
    <div className="wrapper">
      <div className="row">
        <Input>{input}</Input>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>7</Button>
        <Button handleClick={addToInput}>8</Button>
        <Button handleClick={addToInput}>9</Button>
        <Button handleClick={addToInput}>/</Button>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>4</Button>
        <Button handleClick={addToInput}>5</Button>
        <Button handleClick={addToInput}>6</Button>
        <Button handleClick={addToInput}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>1</Button>
        <Button handleClick={addToInput}>2</Button>
        <Button handleClick={addToInput}>3</Button>
        <Button handleClick={addToInput}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>.</Button>
        <Button handleClick={addToInput}>0</Button>
        <Button handleClick={addToInput}>=</Button>
        <Button handleClick={addToInput}>-</Button>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ClearButton from "../ClearButton/ClearButton";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const addToInput = (val) => {
    const display =
      input && input !== operator && input !== previousValue
        ? input + val
        : val;
    setInput(display);
  };

  const clear = () => {
    setInput(0);
  };

  const addToOperator = (val) => {
    const auxOperators = ["+", "*", "/", "-"];
    if (operator && auxOperators.indexOf(val)) {
      setOperator(val);
      setInput(val);
    } else {
      setOperator(val);
      setPreviousValue(input);
      setInput(val);
    }
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
        <Button handleClick={addToOperator}>/</Button>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>4</Button>
        <Button handleClick={addToInput}>5</Button>
        <Button handleClick={addToInput}>6</Button>
        <Button handleClick={addToOperator}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>1</Button>
        <Button handleClick={addToInput}>2</Button>
        <Button handleClick={addToInput}>3</Button>
        <Button handleClick={addToOperator}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={addToInput}>.</Button>
        <Button handleClick={addToInput}>0</Button>
        <Button handleClick={addToInput}>=</Button>
        <Button handleClick={addToOperator}>-</Button>
      </div>
      <div className="row">
        <ClearButton handleClick={clear}>Clear</ClearButton>
      </div>
    </div>
  );
};

export default Calculator;

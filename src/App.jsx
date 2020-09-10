import React, { useState } from "react";

import * as math from "mathjs";

import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import Button from "./components/Button";

export default function App() {
  const [input, setInput] = useState("");

  function addToInput(val) {
    setInput(input + val);
  }

  function handleEqual() {
    setInput(math.evaluate(input));
  }

  return (
    <div className="app">
      <div className="calcWrapper">
        <Input input={input}></Input>
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
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
        <span>Created by Yago Juan</span>
    </div>
  );
}

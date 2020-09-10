import React from "react";

import "./styles.css";

export default function Button(props) {
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return (
    <div
      className={`buttonWrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

import React from "react";

import "./styles.css";

export default function ClearButton(props) {
  return (
    <div className="clearBtn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

import * as React from "react";

const Box = (props) => {
  return (
    <div id={props.id}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        display: "inline-block",
      }}
      onClick = {
          (e) => {
            props.handleClick(e)
          }
      }
    >
      <span>{props.content}</span>
    </div>
  );
};

export default Box;
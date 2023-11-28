import React from "react";

const MemoReact = React.memo(( props) => {
  return (
    <div style={{ margin: "10px" }}>
      I am inside react. memo component
      <button onClick={props.onClick}>Increment</button>
    </div>
  );
});

export default MemoReact;

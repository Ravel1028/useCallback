import React from "react";

const Increment2 = (props) => {
  return (
    <button style={{ margin: "10px" }} onClick={props.onClick}>
      Increment under second component
    </button>
  );
};

export default Increment2;

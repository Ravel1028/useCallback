import React, { useState, useCallback } from "react";
import "./App.css";
import Increment from "./Increment";
import Increment2 from "./Increment2";
import MemoReact from "./MemoReact";

function App() {
  const [count, setCount] = useState(0);

  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, []);

  const incrementWithDependencyList = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const increment = useCallback(() => {
    // function with useCallback
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementWithoutCallback = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <div>Hi</div>
      <div>count is {count} </div>
      <Increment onClick={increment} />
      <Increment2 onClick={incrementWithoutCallback} />
      <div>
        <MemoReact onClick={incrementWithoutCallback} />
      </div>
    </>
  );
}

export default App;

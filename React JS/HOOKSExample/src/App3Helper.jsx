import React from "react";
import { memo } from "react";

const App3Helper = ({ count, setCount }) => {
    console.log("In call Back Helper");
  return (
    <div>
      <p>Value received is: {count}</p>
      <button onClick={setCount}>Click to Incr</button>
    </div>
  );
};
// memo avoid re run of child
export default memo(App3Helper);

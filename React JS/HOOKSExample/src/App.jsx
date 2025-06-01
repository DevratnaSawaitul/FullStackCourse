import { useState, useEffect } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // useState(function, [dependency])   this will run when page loads also every time it runs to prevent that use dependency
  // mounting, updating, unmouting if empty array [] then mounting only run when mouting

  useEffect(() => {
    console.log("the use effect called");
  }, [count]);
  return (
    <div>
      <h1>This is App1 for useEffect Example</h1>
      <h5 onMouseEnter={() => setCount(++count)}> This is 1: {count}</h5>
      <h5 onMouseEnter={() => setCount2(++count2)}> This is 2: {count2}</h5>
    </div>
  );
}

export default App;

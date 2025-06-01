import React, { useMemo, useState } from "react";
function App2() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  let doSomething = () => {
    console.log("this is doSomething: ");
  };

  useMemo(() => {
    doSomething();
  }, [count]);
  return (
    <div>
      <h1>This is App2 for useMemo Example</h1>
      {count} {count2}
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Change1
      </button>
      <button
        onClick={() => {
          setCount2(++count2);
        }}
      >
        Change2
      </button>
    </div>
  );
}

export default App2;

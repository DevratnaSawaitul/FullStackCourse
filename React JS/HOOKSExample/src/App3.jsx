import React, { useCallback, useEffect, useState } from "react";
import App3Helper from "./App3Helper";
import myHook from "./myHook";
function App3() {
  let [count, setCount] = useState(0);
  let [parent, setParent] = useState(0);

  // useCallback will prepare copy of this method
  // let giveRandom = () => {
  //   setCount(Math.ceil(Math.random() * 10));
  // };
  let giveRandom = useCallback(() => {
    setCount(Math.ceil(Math.random() * 10));
  }, []);

  useEffect(()=>{
    myHook('Custom Hook');
  },[])
  return (
    <div>
      <h1>This is App3 for useCallback Example</h1>
      <App3Helper count={count} setCount={giveRandom} />
      <hr />
      // below state change will reload child component also
      <h3>this is parent {parent}</h3>
      <button
        onClick={() => {
          setParent(++parent);
        }}
      >
        {" "}
        set parent
      </button>
    </div>
  );
}

export default App3;

import React from "react";
import { action1, action2 } from "./SlicesForRedux/counterSlice";
// can't use action directly we need to use useDispatch
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  let ourDispatch = useDispatch();
  let state = useSelector((state) => state.counter.value);
  return (
    <div>
      <h3>this is counter comp Count: {state}</h3>
      <button onClick={() => ourDispatch(action1())}>Incre</button>
      <button onClick={() => ourDispatch(action2())}>Decre</button>
    </div>
  );
};

export default Counter;
import React from "react";
import HigherOrderFunction from "./HigherOrderFunction";
const HOCComp2 = ({ state, handler }) => {
  return (
    <div>
      <a href="/comp1">this will reload page but open comp1</a>
      <h1>This is Higher Order Comp 2</h1>
      Click to Increment
      <button onClick={handler}> Click</button>
      <h1>{state}</h1>
    </div>
  );
};

export default HigherOrderFunction(HOCComp2);

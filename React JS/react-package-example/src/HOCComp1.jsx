import React from "react";
import HigherOrderFunction from "./HigherOrderFunction";
import { Link } from "react-router-dom";
const HOCComp1 = ({ state, handler }) => {
  return (
    <div>
      <Link to="/comp2">this will load comp without reloading whole page comp2</Link>
      <h1>This is Higher Order Comp 1</h1>
      <p onMouseEnter={handler}>Hover to increment</p>
      <h1>{state}</h1>
    </div>
  );
};

export default HigherOrderFunction(HOCComp1);

import React, { useContext } from "react";
import ourContext from "./contextHelper";
import SubChild from "./SubChild";
function Child() {
  const usingOurContext = useContext(ourContext);
  console.log("this is usingOurcontext value: ", usingOurContext);
  return (
    <div>
      <h3>this is child {usingOurContext}</h3>
      <SubChild />
    </div>
  );
}

export default Child;

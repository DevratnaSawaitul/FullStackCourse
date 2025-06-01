import React, { useContext } from "react";
import ourContext from "./contextHelper";
function SubChild() {
  const usingOurContext = useContext(ourContext);
  console.log("this is usingOurcontext in subchild value: ", usingOurContext);
  return (
    <div>
      <h3>this is sub child {usingOurContext}</h3>
    </div>
  );
}

export default SubChild;

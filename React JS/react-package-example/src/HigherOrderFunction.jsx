import React, { useState } from "react";

const HigherOrderFunction = ( OriginalComponent ) => {
  function ModifiedComponent() {
    // add new features or do some optimization
    let[count, incCount] = useState(0);

    const handleInc = ()=>{
        incCount(++count);
    }
    return <OriginalComponent state={count} handler={handleInc}/> 
  }
  return ModifiedComponent;
};
export default HigherOrderFunction;

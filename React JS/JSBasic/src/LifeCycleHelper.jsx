import React, { Component } from "react";
import { useState } from "react";
import LifeCycle from "./lifeCycle";
class LifeCycleHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComp: true,
    };
    console.log("Constructor is called in LifeCycle");
  }

  handleClickCheck = () => {
    this.setState((prevState) => ({
      showComp: !prevState.showComp
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickCheck}>Click Me to Change Comp</button>
        { this.state.showComp? <LifeCycle/>:<h1>this is else</h1>}
      </div>
    );
  }
}
export default LifeCycleHelper;
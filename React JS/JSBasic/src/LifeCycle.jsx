import React, { Component } from "react";
import { useState } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor is called in LifeCycle");
  }
  componentDidMount(){
    console.log("Compoent Did Mount called in LifeCycle");
  }
  componentDidUpdate(prevProp, prevState){
    console.log("Compoent Did Update called in LifeCycle");
  }
  shouldComponentUpdate(nextProp, nextState){
    console.log("Should Component Update called in LifeCycle");
    return nextState.count!== this.state.count
  }
  componentWillUnmount(){
    console.log("Compoent will Un Mount called in LifeCycle");
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  render() {
    console.log("Render is called in LifeCycle");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
export default LifeCycle;

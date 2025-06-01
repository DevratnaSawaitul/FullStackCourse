import { useState } from "react";
import "./App.css";
import Quote from "./Quote";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import AppMenu from "./AppMenu";
import PlayingArea from "./PlayingArea";
function App() {
  document.title = "Tic Tac Toe";
  const { isActive, setIsActive, userChoice, setUserChoice } =
    useContext(AppContext);
  return (
    <div>
      <h2 className="heading">Tic Tac Toe</h2>
      <Quote />
      {isActive.toString() != "true" ? <AppMenu /> : <PlayingArea />}
    </div>
  );
}

export default App;

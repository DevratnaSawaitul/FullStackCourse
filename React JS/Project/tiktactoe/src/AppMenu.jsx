import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import "./AppMenu.css";
export default function AppMenu() {
  const { isActive, setIsActive, userChoice, setUserChoice } =
    useContext(AppContext);
  return (
    <div className="menu-body">
      <div className="menu-user">
        <h2>Pick Player</h2>
        <button
          className={userChoice === "O" ? "active-choice" : ""}
          onClick={() => setUserChoice("O")}
        >
          O
        </button>
        <button
          className={userChoice === "X" ? "active-choice" : ""}
          onClick={() => setUserChoice("X")}
        >
          X
        </button>
      </div>
      <button onClick={() => setIsActive(!isActive)} className="game-button">
        NEW GAME (VS CPU)
      </button>
      <button
        className="game-button"
        onClick={() => alert("Coming Soon... Stay Tunned")}
      >
        NEW GAME (VS HUMAN)
      </button>
    </div>
  );
}

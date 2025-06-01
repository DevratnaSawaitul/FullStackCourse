import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2"; // import SweetAlert2
import "./PlayingArea.css";
import { AppContext } from "./AppContext";

export default function PlayingArea() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const { isActive, setIsActive, userChoice } = useContext(AppContext);

  useEffect(() => {
    if (!localStorage.getItem("user_score"))
      localStorage.setItem("user_score", "0");
    if (!localStorage.getItem("cpu_score"))
      localStorage.setItem("cpu_score", "0");
    if (!localStorage.getItem("ties")) localStorage.setItem("ties", "0");
  }, []);

  const checkWinner = (currentBoard) => {
    const cpu_choice = userChoice === "X" ? "O" : "X";
    const user_choice = userChoice;

    const winningLines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
    ];

    let winner = null;

    for (const line of winningLines) {
      const [a, b, c] = line;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        winner = currentBoard[a];
        break;
      }
    }

    if (winner === user_choice) {
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "You won!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => reInitialize());
      }, 100);
      localStorage.setItem(
        "user_score",
        parseInt(localStorage.getItem("user_score")) + 1
      );
      return true;
    } else if (winner === cpu_choice) {
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          title: "CPU won!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => reInitialize());
      }, 100);
      localStorage.setItem(
        "cpu_score",
        parseInt(localStorage.getItem("cpu_score")) + 1
      );
      return true;
    } else if (currentBoard.every((cell) => cell !== "")) {
      setTimeout(() => {
        Swal.fire({
          icon: "info",
          title: "It's a tie!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => reInitialize());
      }, 100);
      localStorage.setItem("ties", parseInt(localStorage.getItem("ties")) + 1);
      return true;
    }
    return false;
  };

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = userChoice;
    setBoard(newBoard);
    document.getElementById("turn").innerHTML = userChoice + " Turn";

    // Check winner after user move
    const userWon = checkWinner(newBoard);
    if (userWon) return;

    setTimeout(() => {
      const cpu_choice = userChoice === "X" ? "O" : "X";
      const hasEmpty = newBoard.includes("");
      if (!hasEmpty) return;

      let cpuIndex;
      do {
        cpuIndex = Math.floor(Math.random() * 9);
      } while (newBoard[cpuIndex] !== "");

      newBoard[cpuIndex] = cpu_choice;
      setBoard([...newBoard]);
      document.getElementById("turn").innerHTML = cpu_choice + " Turn";

      // Check winner after CPU move
      checkWinner(newBoard);
    }, 500);
  };

  const reInitialize = () => {
    setBoard(Array(9).fill(""));
    document.getElementById("turn").innerHTML = userChoice + " Turn";
  };

  const clearScore = () => {
    localStorage.setItem("user_score", "0");
    localStorage.setItem("cpu_score", "0");
    localStorage.setItem("ties", "0");
    reInitialize();
  };

  return (
    <div className="playing-area-body">
      <button
        label="Exit"
        onClick={() => setIsActive(!isActive)}
        className="exit_button"
      >
        &#x21d0;
      </button>
      <button
        label="Clear"
        onClick={() => clearScore()}
        className="clear_score_button"
      >
        &#128465;
      </button>
      <div className="playing-header">
        <span className="playing-title">X O</span>
        <span id="turn" className="playing-turn">
          Turn
        </span>
        <span className="refresh-icon" onClick={reInitialize}>
          &#x21bb;
        </span>
      </div>

      <div className="playing-grid">
        {board.map((value, index) => (
          <div
            key={index}
            className="grid-cell"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="score-card">
        <span>User: {localStorage.getItem("user_score") || 0}</span>
        <span>Ties: {localStorage.getItem("ties") || 0}</span>
        <span>CPU: {localStorage.getItem("cpu_score") || 0}</span>
      </div>
    </div>
  );
}

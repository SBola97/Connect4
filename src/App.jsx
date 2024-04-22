import { useState } from "react";
import { turnos } from "./utils/constants.js";
import {
  checkEndGame,
  checkWin,
  findLastEmptyRow,
} from "./utils/boardLogic.js";
import { Cell } from "./components/Cell.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(turnos.X);
  const [winner, setWinner] = useState(null);

  //reinicia los valores del tablero, turnos y ganador
  const resetGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(turnos.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    //comprueba si la casilla del tablero está vacía o hay un ganador
    if (board[index] || winner) return;
    // cálculo de fila a llenar
    const emptyRowIndex = findLastEmptyRow(index, board);
    console.log("Empty row ", emptyRowIndex);
    //actualiza el tablero calculando el índice de la celda
    const newBoard = [...board];
    newBoard[emptyRowIndex * 7 + (index % 7)] = turn;
    setBoard(newBoard);
    //actualiza el turno
    const newTurn = turn === turnos.X ? turnos.O : turnos.X;
    setTurn(newTurn);
    //actualiza en caso de haber ganador
    const newWinner = checkWin(newBoard);
    console.log("El ganador es:", newWinner);
    if (newWinner) {
      setWinner(newWinner);
    }
    //si no existe ganador, se asigna false (empate)
    else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <div className="wrapper">
      <main className="board">
        <h1>
          Conecta <span>4</span>
        </h1>
        <section className="game">
          {board.map((cell, index) => {
            return (
              <Cell key={index} index={index} updateBoard={updateBoard}>
                {cell}
              </Cell>
            );
          })}
        </section>
        <section className="turn">
          <p>Turno:</p>
          {turn}
        </section>
      </main>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
      <Footer/>
    </div>
  );
}

export default App;

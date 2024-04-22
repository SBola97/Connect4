export const WinnerModal = ({winner,resetGame}) => {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "El ganador es:";
    return (
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className="win">{winner}</header>
          <footer>
            <button onClick={resetGame}>Jugar de nuevo</button>
          </footer>
        </div>
      </section>
    );
};